import { user, User } from "@/utils/dummyData";

export async function LoginAction(email: string, password: string): Promise<User | null> {
  await new Promise(resolve => setTimeout(resolve, 500));

  user.forEach(users => {
    if(email === users.email && password === users.password) {
      const {password, ...mockUser} = users;
      return mockUser as User;
    }
  });
  return null;
}