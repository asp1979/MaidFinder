using Microsoft.EntityFrameworkCore.Migrations;

namespace MaidFinderWebAPI.Migrations
{
    public partial class RemainingFieldsAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Candidate",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Area",
                table: "Candidate",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CNIC",
                table: "Candidate",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CellNumber",
                table: "Candidate",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CityID",
                table: "Candidate",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Candidate",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Candidate_CityID",
                table: "Candidate",
                column: "CityID");

            migrationBuilder.AddForeignKey(
                name: "FK_Candidate_City_CityID",
                table: "Candidate",
                column: "CityID",
                principalTable: "City",
                principalColumn: "CityID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Candidate_City_CityID",
                table: "Candidate");

            migrationBuilder.DropIndex(
                name: "IX_Candidate_CityID",
                table: "Candidate");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Candidate");

            migrationBuilder.DropColumn(
                name: "Area",
                table: "Candidate");

            migrationBuilder.DropColumn(
                name: "CNIC",
                table: "Candidate");

            migrationBuilder.DropColumn(
                name: "CellNumber",
                table: "Candidate");

            migrationBuilder.DropColumn(
                name: "CityID",
                table: "Candidate");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Candidate");
        }
    }
}
