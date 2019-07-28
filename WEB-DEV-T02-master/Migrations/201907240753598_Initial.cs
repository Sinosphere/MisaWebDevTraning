namespace FresherTraining.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Refs",
                c => new
                    {
                        refID = c.Guid(nullable: false, defaultValueSql:"newid()", identity: true),
                        refDate = c.DateTime(nullable: false),
                        refNo = c.String(nullable: false),
                        refType = c.String(nullable: false),
                        total = c.Decimal(nullable: false, precision: 18, scale: 2),
                        contactName = c.String(),
                        reason = c.String(),
                    })
                .PrimaryKey(t => t.refID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Refs");
        }
    }
}
