import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import dotenv = require('dotenv');

dotenv.config().parsed;

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public isProduction() {
    const mode = this.getValue('MODE', true);
    return mode !== 'DEV';
  }

  public getTypeOrmConfig(): PostgresConnectionOptions {
    return {
      type: 'postgres',
      host: this.getValue('DB_HOST', true),
      port: parseInt(this.getValue('DB_PORT'), 10),
      username: this.getValue('DB_USERNAME'),
      password: this.getValue('DB_PASSWORD'),
      database: this.getValue('DB_NAME'),
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: this.getValue('DB_SYNCHRONIZE') === 'true',

      migrationsTableName: 'migrations',

      migrations: ['dist/src/migrations/*.js'],

      cli: {
        migrationsDir: 'src/migrations',
      },

      ssl: this.isProduction(),
      logging: true,
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'DB_HOST',
  'DB_PORT',
  'DB_USERNAME',
  'DB_PASSWORD',
  'DB_NAME',
  'MODE',
]);

export { configService };
