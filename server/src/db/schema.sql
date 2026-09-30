-- FlipCode SaaS MySQL Database Schema Reference

CREATE DATABASE IF NOT EXISTS flipcode_saas_db;
USE flipcode_saas_db;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'member', 'viewer') DEFAULT 'member',
  avatar VARCHAR(500) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('planning', 'in_progress', 'completed', 'paused') DEFAULT 'planning',
  priority ENUM('low', 'medium', 'high', 'critical') DEFAULT 'medium',
  budget DECIMAL(12, 2) DEFAULT 0.00,
  spent DECIMAL(12, 2) DEFAULT 0.00,
  progress INT DEFAULT 0,
  deadline DATE,
  owner_id VARCHAR(64),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL
);

-- 3. Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(100) DEFAULT 'Developer',
  status ENUM('active', 'invited', 'offline') DEFAULT 'active',
  department VARCHAR(100) DEFAULT 'Engineering',
  projects_count INT DEFAULT 0,
  avatar VARCHAR(500) DEFAULT NULL,
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Activity Logs Table
CREATE TABLE IF NOT EXISTS activity_logs (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64),
  user_name VARCHAR(255) NOT NULL,
  user_avatar VARCHAR(500) DEFAULT NULL,
  action VARCHAR(255) NOT NULL,
  target VARCHAR(255) NOT NULL,
  type ENUM('project', 'auth', 'team', 'system') DEFAULT 'system',
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Analytics Events Table
CREATE TABLE IF NOT EXISTS analytics_events (
  id VARCHAR(64) PRIMARY KEY,
  event_name VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  value DECIMAL(10, 2) DEFAULT 0.00,
  meta_json JSON DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
