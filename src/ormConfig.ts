import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'luber',
  synchronize: true,
  logging: true,
  entities: ['entities/**/*.*'],
  host: process.env.DB_ENDPOINT || 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME || 'alexlevanov',
  password: process.env.DB_PASSWORD || ''
};

export default connectionOptions;
