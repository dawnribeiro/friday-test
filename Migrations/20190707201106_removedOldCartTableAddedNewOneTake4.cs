using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class removedOldCartTableAddedNewOneTake4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_Flowers_FlowerId",
                table: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_Carts_FlowerId",
                table: "Carts");

            migrationBuilder.RenameColumn(
                name: "FlowerId",
                table: "Carts",
                newName: "CartItem");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CartItem",
                table: "Carts",
                newName: "FlowerId");

            migrationBuilder.CreateIndex(
                name: "IX_Carts_FlowerId",
                table: "Carts",
                column: "FlowerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Carts_Flowers_FlowerId",
                table: "Carts",
                column: "FlowerId",
                principalTable: "Flowers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
