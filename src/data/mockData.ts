export interface User {
  email: string;
  role: string;
}

export const mockUsers: User[] = [
  { email: 'recruiter@buxton.com', role: 'Recruiter' },
  { email: 'manager@buxton.com', role: 'Manager' },
  { email: 'admin@buxton.com', role: 'Admin' },
  { email: 'tech@buxton.com', role: 'Tech' },
  { email: 'executive@buxton.com', role: 'Executive' }
];

export const findUserByEmail = (email: string): User | undefined => {
  return mockUsers.find(user => user.email === email);
};