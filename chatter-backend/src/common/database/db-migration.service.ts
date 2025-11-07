import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { config, database, up } from "migrate-mongo";

@Injectable()
export class DbMigrationService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    // Use project root instead of relative __dirname to avoid dist path issues
    const migrationsDir = `${process.cwd()}/migrations`;

    const dbMigrationConfig: Partial<config.Config> = {
      mongodb: {
        databaseName: this.configService.getOrThrow('DB_NAME'),
        url: this.configService.getOrThrow('MONGODB_URI'),
      },
      migrationsDir,
      changelogCollectionName: 'changelog',
      migrationFileExtension: '.js',
    };

    config.set(dbMigrationConfig);

    const { db, client } = await database.connect();
    const migrated = await up(db, client);
    console.log('✅ Migrations applied:', migrated);
    await client.close();
  }
}
