export interface User {
    id: number;
    role: string;
    name: string;
    email: string;
    password: string;
};

export const user: Array<User> = [
  {
    id: 1,
    role: "admin",
    name: "Juan",
    email: "juan@example.com",
    password: "123456"
  },
  {
    id: 1,
    role: "user",
    name: "Juan2",
    email: "juan2@example.com",
    password: "12345"
  },
  {
    id: 1,
    role: "user",
    name: "Juan3",
    email: "jua3n@example.com",
    password: "1234"
  }
];