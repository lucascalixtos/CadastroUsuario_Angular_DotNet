import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { EditUser } from '../models/edituser.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  @ViewChild('editForm', {static: false}) public editForm: NgForm

  Users;

  editUser = new EditUser();

  Id = new FormControl();
  Nome = new FormControl();
  Sobrenome = new FormControl();
  Email = new FormControl();
  Senha = new FormControl();

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.ListUsers();
  }


  public ListUsers(): void{
    console.log("passou aqui");
    this.clientService.ListUsers()
    .subscribe(retorno =>{
      this.Users = retorno;
      console.log(this.Users);
    })
  }

  public DeleteUser(id: number): void{
    this.clientService.DeleteUser(id).subscribe();
    window.location.reload();
  }

  public GetUser(id: number): void{
    document.getElementById('edit').style.display = "block";

    this.clientService.GetUser(id)
    .subscribe(retorno =>{
      this.editUser.Id = retorno.id;
      this.Id.setValue(retorno.id)
      this.editUser.Nome = retorno.nome;
      this.Nome.setValue(retorno.nome)
      this.editUser.Sobrenome = retorno.sobrenome;
      this.Sobrenome.setValue(retorno.sobrenome)
      this.editUser.Email = retorno.email;
      this.Email.setValue(retorno.email)
      this.editUser.Senha = retorno.senha;
      this.Senha.setValue(retorno.senha);
    })
  }

  public EditUser(): void{

    var user = new EditUser();
    user.Id = this.Id.value;
    user.Email = this.Email.value;
    user.Nome = this.Nome.value;
    user.Senha = this.Senha.value;
    user.Sobrenome = this.Sobrenome.value;

    console.log("user");
    console.log(user);

    this.clientService.EditUser(user).subscribe(retorno => {
      window.location.reload();
    });
  }
  

}
