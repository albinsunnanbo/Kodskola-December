namespace KodskolaDecember.Migrations
{
    using KodskolaDecember.Entities;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<KodskolaDecember.Entities.KodskolaContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(KodskolaDecember.Entities.KodskolaContext context)
        {
            //  This method will be called after migrating to the latest version.

            context.Orders.AddOrUpdate(
              p => p.CustomerName,
              new Order { CustomerName = "Adam", Rows = new List<OrderRow> { new OrderRow { Price = 1 }, new OrderRow { Price = 2 } } },
              new Order { CustomerName = "Bob", Rows = new List<OrderRow> { new OrderRow { Price = 3 } } },
              new Order { CustomerName = "Caesar", Rows = new List<OrderRow> { new OrderRow { Price = 4 }, new OrderRow { Price = 5 }, new OrderRow { Price = 6 } } }
            );
            context.SaveChanges();
        }
    }
}
