using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendApi.Migrations
{
    /// <inheritdoc />
    public partial class RemoveRequiredInImage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_sightings",
                table: "sightings");

            migrationBuilder.RenameTable(
                name: "sightings",
                newName: "Sightings");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Sightings",
                table: "Sightings",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Sightings",
                table: "Sightings");

            migrationBuilder.RenameTable(
                name: "Sightings",
                newName: "sightings");

            migrationBuilder.AddPrimaryKey(
                name: "PK_sightings",
                table: "sightings",
                column: "Id");
        }
    }
}
