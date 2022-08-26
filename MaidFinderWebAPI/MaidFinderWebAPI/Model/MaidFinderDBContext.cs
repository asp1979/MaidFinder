using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MaidFinderWebAPI.Model
{
    public class MaidFinderDbContext : DbContext
    {
        public MaidFinderDbContext(DbContextOptions<MaidFinderDbContext> options) : base(options)
        {

        }

        public DbSet<Candidate> Candidate { get; set; }
        public DbSet<City> City { get; set; }

    }
}
