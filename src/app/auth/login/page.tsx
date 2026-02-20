import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return(
    <main className="flex justify-center items-center min-h-screen">
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 w-110 flex flex-col items-center p-8 gap-6 rounded-xl">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="">Accede a tu cuenta</p>
        <div className="">
          <LoginForm/>
        </div>
      </div>
    </main>
  )
}