import { createPool } from "mysql2/promise";
import { DB_NAME, DB_USER, DB_HOST, DB_PORT, DB_PASSWORD } from "../config.js";

const poll = createPool({
  database: DB_NAME,
  user: DB_USER,
  host: DB_HOST,
  port: DB_PORT,
  password: DB_PASSWORD
});

export default poll;
