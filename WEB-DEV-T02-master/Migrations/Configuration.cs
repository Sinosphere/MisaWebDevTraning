namespace FresherTraining.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FresherTraining.Models.FresherTrainingContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(FresherTraining.Models.FresherTrainingContext context)
        {
        }
    }
}
