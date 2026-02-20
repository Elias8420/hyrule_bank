import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return(
    <main className="flex justify-center items-center min-h-screen">
      <div className="bg-blue-500 w-110 flex flex-col items-center p-8 gap-6">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="">Accede a tu cuenta</p>
        <div className="">
          <LoginForm/>
        </div>
      </div>
    </main>
  )
}