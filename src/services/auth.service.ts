import { LoginCredentials, RegisterData, User } from '../models/user.model';

export class AuthService {
  async login(credentials: LoginCredentials): Promise<User> {
    // Implement API call to your backend
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return response.json();
  }

  async register(data: RegisterData): Promise<User> {
    // Implement API call to your backend
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async forgotPassword(email: string): Promise<void> {
    // Implement API call to your backend
    await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
  }
} 