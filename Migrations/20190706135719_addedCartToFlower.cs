using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class addedCartToFlower : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_Flowers_FlowerId",
                table: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_Carts_FlowerId",
                table: "Carts");

            migrationBuilder.DropColumn(
                name: "FlowerId",
                table: "Carts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FlowerId",
                table: "Carts",
                nullable: true);

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
