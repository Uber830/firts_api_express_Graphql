import "dotenv/config"; /* const dotenv = require('dotenv').config() */

export const PORT = process.env.PORT || 3020;

export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_NAME = process.env.DB_NAME || "usersdb";
export const DB_USER = process.env.DB_USER || "adminAnonymous";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PASSWORD = process.env.DB_PASSWORD || "passwordRoot";