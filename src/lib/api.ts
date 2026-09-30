const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  count?: number;
  meta?: any;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in_progress' | 'completed' | 'paused';
  priority: 'low' | 'medium' | 'high' | 'critical';
  budget: number;
  spent: number;
  progress: number;
  deadline: string;
  ownerId?: string;
  ownerName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Developer' | 'Designer' | 'Product Manager' | 'Marketing';
  status: 'active' | 'invited' | 'offline';
  department: string;
  projectsCount: number;
  avatar: string;
  joinedAt: string;
}

export interface AnalyticsSummary {
  mrr: number;
  mrrGrowth: number;
  activeUsers: number;
  activeUsersGrowth: number;
  conversionRate: number;
  conversionRateGrowth: number;
  serverUptime: number;
  revenueHistory: { month: string; revenue: number; expenses: number; profit: number }[];
  userGrowth: { date: string; users: number; signups: number }[];
  trafficSources: { name: string; percentage: number; visitors: number }[];
  projectStats: {
    total: number;
    inProgress: number;
    completed: number;
    planning: number;
    paused: number;
  };
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  action: string;
  target: string;
  timestamp: string;
  type: 'project' | 'auth' | 'team' | 'system';
}

export interface DbStatus {
  connected: boolean;
  type: 'mysql' | 'memory-fallback';
  database: string;
  host: string;
  port: number;
  user: string;
  error?: string;
}

function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('flipcode_token');
}

async function fetchWithAuth<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken();
  const headers = new Headers(options.headers || {});
  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const url = `${API_BASE}${endpoint}`;
  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Request failed with status ${res.status}`);
    }
    return data;
  } catch (err: any) {
    console.error(`[API Error] ${endpoint}:`, err);
    throw err;
  }
}

export const api = {
  // Health & Database status
  health: {
    check: () => fetchWithAuth<{ status: string; service: string; database: DbStatus }>('/health'),
    dbStatus: () => fetchWithAuth<ApiResponse<DbStatus>>('/health/db-status'),
  },

  // Auth endpoints
  auth: {
    login: (credentials: { email: string; password: string }) =>
      fetchWithAuth<ApiResponse<{ token: string; user: User }>>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      }),
    register: (data: { name: string; email: string; password: string }) =>
      fetchWithAuth<ApiResponse<{ token: string; user: User }>>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    getMe: () => fetchWithAuth<ApiResponse<User>>('/auth/me'),
  },

  // Projects CRUD
  projects: {
    getAll: (params?: { status?: string; priority?: string; search?: string }) => {
      const query = new URLSearchParams();
      if (params?.status && params.status !== 'all') query.append('status', params.status);
      if (params?.priority && params.priority !== 'all') query.append('priority', params.priority);
      if (params?.search) query.append('search', params.search);
      const queryString = query.toString() ? `?${query.toString()}` : '';
      return fetchWithAuth<ApiResponse<Project[]>>(`/projects${queryString}`);
    },
    getById: (id: string) => fetchWithAuth<ApiResponse<Project>>(`/projects/${id}`),
    create: (data: Partial<Project>) =>
      fetchWithAuth<ApiResponse<Project>>('/projects', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    update: (id: string, data: Partial<Project>) =>
      fetchWithAuth<ApiResponse<Project>>(`/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    delete: (id: string) =>
      fetchWithAuth<ApiResponse<{ id: string }>>(`/projects/${id}`, {
        method: 'DELETE',
      }),
  },

  // Analytics & Activity
  analytics: {
    getSummary: () => fetchWithAuth<ApiResponse<AnalyticsSummary>>('/analytics/summary'),
    getActivity: () => fetchWithAuth<ApiResponse<ActivityLog[]>>('/analytics/activity'),
  },

  // Team
  team: {
    getAll: () => fetchWithAuth<ApiResponse<TeamMember[]>>('/team'),
    invite: (data: { name: string; email: string; role?: string; department?: string }) =>
      fetchWithAuth<ApiResponse<TeamMember>>('/team/invite', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    remove: (id: string) =>
      fetchWithAuth<ApiResponse<{ id: string }>>(`/team/${id}`, {
        method: 'DELETE',
      }),
  },
};
