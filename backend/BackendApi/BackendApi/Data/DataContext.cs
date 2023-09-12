using BackendApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendApi.Data
{
    //This class is inherited from DbContext
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options)
        {

        }


        //connection string (connect to sql server)
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("server = DANNORUWA-PC\\SQLEXPRESS; database = ApiDb; Trusted_Connection = true; TrustServerCertificate = true");
        }

        //DbSet instance (entity set) : is used for perform various dataabase operations (CREATE, SELECT, DELETE, UPDATE )
        public DbSet<Sighting> Sightings { get; set; }
    }
}
