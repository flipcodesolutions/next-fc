import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import { initDatabase } from './db/connection.js';
import { runMigrationsAndSeed } from './db/migrations.js';
import { errorHandler, requestLogger } from './middleware/errorHandler.js';

import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/project.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import teamRoutes from './routes/team.routes.js';
import healthRoutes from './routes/health.routes.js';

const app = express();

// Middlewares
app.use(cors({
  origin: '*', // Allow frontend during development
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/team', teamRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: '🚀 FlipCode Node.js + Express SaaS Backend API is running.',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      projects: '/api/projects',
      analytics: '/api/analytics',
      team: '/api/team',
    },
    version: '1.0.0',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl} - Endpoint not found`,
  });
});

// Centralized error handler
app.use(errorHandler);

// Start server function
async function startServer() {
  console.log('----------------------------------------------------');
  console.log('🌟 Starting FlipCode Node.js Backend Server (JS)...');
  console.log('----------------------------------------------------');

  // Attempt MySQL connection and run migrations / seed
  await initDatabase();
  await runMigrationsAndSeed();

  app.listen(config.port, () => {
    console.log(`🚀 Express API Server listening on: http://localhost:${config.port}`);
    console.log(`📊 Health Endpoint: http://localhost:${config.port}/api/health`);
    console.log('----------------------------------------------------');
  });
}

startServer().catch(err => {
  console.error('Fatal server startup error:', err);
});
