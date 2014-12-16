namespace KodskolaDecember.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        OrderId = c.Int(nullable: false, identity: true),
                        CustomerName = c.String(),
                    })
                .PrimaryKey(t => t.OrderId);
            
            CreateTable(
                "dbo.OrderRows",
                c => new
                    {
                        OrderRowId = c.Int(nullable: false, identity: true),
                        Price = c.Int(nullable: false),
                        Order_OrderId = c.Int(),
                    })
                .PrimaryKey(t => t.OrderRowId)
                .ForeignKey("dbo.Orders", t => t.Order_OrderId)
                .Index(t => t.Order_OrderId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.OrderRows", "Order_OrderId", "dbo.Orders");
            DropIndex("dbo.OrderRows", new[] { "Order_OrderId" });
            DropTable("dbo.OrderRows");
            DropTable("dbo.Orders");
        }
    }
}
