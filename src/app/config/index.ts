import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  saltRound: process.env.BECRYPT_SALT_ROUND,
  default_password: process.env.DEFAULT_PASS,
};
