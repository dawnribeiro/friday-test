using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class removedOldCartTableAddedNewOne1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FlowerId",
                table: "Flowers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Flowers_FlowerId",
                table: "Flowers",
                column: "FlowerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Flowers_Flowers_FlowerId",
                table: "Flowers",
                column: "FlowerId",
                principalTable: "Flowers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flowers_Flowers_FlowerId",
                table: "Flowers");

            migrationBuilder.DropIndex(
                name: "IX_Flowers_FlowerId",
                table: "Flowers");

            migrationBuilder.DropColumn(
                name: "FlowerId",
                table: "Flowers");
        }
    }
}
