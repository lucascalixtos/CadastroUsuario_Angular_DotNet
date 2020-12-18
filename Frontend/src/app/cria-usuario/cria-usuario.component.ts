import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-cria-usuario',
  templateUrl: './cria-usuario.component.html',
  styleUrls: ['./cria-usuario.component.css']
})
export class CriaUsuarioComponent implements OnInit {

  @ViewChild('insertForm', {static: false}) public insertForm: NgForm

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  public RegisterUser(): void{
    console.log("Passou aqui");
    var user = new User()
    user.Email = this.insertForm.value.Email;
    user.Nome = this.insertForm.value.Nome;
    user.Sobrenome = this.insertForm.value.Sobrenome;
    user.Senha = this.insertForm.value.Senha;
    this.clientService.RegisterUser(user).subscribe(retorno => {
      window.location.reload();
    });
  }



}
