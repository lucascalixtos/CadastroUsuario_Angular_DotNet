using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUD_BASICO.Migrations
{
    public partial class senha : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "String",
                table: "Usuario",
                newName: "Senha");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Senha",
                table: "Usuario",
                newName: "String");
        }
    }
}
