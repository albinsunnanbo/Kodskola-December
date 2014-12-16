using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace KodskolaDecember.Entities
{
    public class KodskolaContext : DbContext
    {
        public KodskolaContext()
            : base("KodskolaContext")
        {
        }

        public DbSet<Order> Orders { get; set; }

    }
}