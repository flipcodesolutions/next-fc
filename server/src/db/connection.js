import mysql from 'mysql2/promise';
import { config } from '../config/index.js';

let pool = null;
let isConnectedToMysql = false;
let lastDbError = null;

// High-fidelity fallback storage if MySQL isn't running locally yet
export const mockStore = {
  users: [],
  projects: [],
  teamMembers: [],
  activityLogs: [],
};

export async function getDbPool() {
  if (pool && isConnectedToMysql) {
    return pool;
  }
  return null;
}

export function isMysqlConnected() {
  return isConnectedToMysql;
}

export function getDbStatus() {
  return {
    connected: isConnectedToMysql,
    type: isConnectedToMysql ? 'mysql' : 'memory-fallback',
    database: config.db.database,
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    error: lastDbError || undefined,
  };
}

export async function initDatabase() {
  try {
    console.log(`[Database] Connecting to MySQL at ${config.db.host}:${config.db.port}...`);
    
    // First test connection to MySQL server (without selecting DB in case it doesn't exist)
    const rootConnection = await mysql.createConnection({
      host: config.db.host,
      port: config.db.port,
      user: config.db.user,
      password: config.db.password,
    });

    // Create database if not exists
    await rootConnection.query(`CREATE DATABASE IF NOT EXISTS \`${config.db.database}\`;`);
    await rootConnection.end();

    // Create pool for the specific database
    pool = mysql.createPool({
      host: config.db.host,
      port: config.db.port,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database,
      waitForConnections: true,
      connectionLimit: config.db.connectionLimit,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 10000,
    });

    // Test pool connection
    const testConn = await pool.getConnection();
    testConn.release();

    isConnectedToMysql = true;
    lastDbError = null;
    console.log(`[Database] ✅ Successfully connected to MySQL database: ${config.db.database}`);
    return true;
  } catch (err) {
    isConnectedToMysql = false;
    lastDbError = err.message || 'Failed to connect to MySQL';
    console.warn(`[Database] ⚠️ MySQL Connection Notice: ${lastDbError}`);
    console.warn(`[Database] ℹ️ Running with in-memory persistence layer. To use MySQL, ensure MySQL is running on ${config.db.host}:${config.db.port} and configure .env`);
    return false;
  }
}
