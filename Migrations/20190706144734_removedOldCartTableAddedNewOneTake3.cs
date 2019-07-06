using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class removedOldCartTableAddedNewOneTake3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flowers_Carts_CartId",
                table: "Flowers");

            migrationBuilder.DropForeignKey(
                name: "FK_Flowers_Flowers_FlowerId",
                table: "Flowers");

            migrationBuilder.DropIndex(
                name: "IX_Flowers_CartId",
                table: "Flowers");

            migrationBuilder.DropIndex(
                name: "IX_Flowers_FlowerId",
                table: "Flowers");

            migrationBuilder.DropColumn(
                name: "CartId",
                table: "Flowers");

            migrationBuilder.DropColumn(
                name: "FlowerId",
                table: "Flowers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CartId",
                table: "Flowers",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FlowerId",
                table: "Flowers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Flowers_CartId",
                table: "Flowers",
                column: "CartId");

            migrationBuilder.CreateIndex(
                name: "IX_Flowers_FlowerId",
                table: "Flowers",
                column: "FlowerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Flowers_Carts_CartId",
                table: "Flowers",
                column: "CartId",
                principalTable: "Carts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Flowers_Flowers_FlowerId",
                table: "Flowers",
                column: "FlowerId",
                principalTable: "Flowers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
