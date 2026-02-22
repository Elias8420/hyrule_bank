import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return(
    <main className="flex justify-center items-center min-h-screen">
      <div className="bg-gradient-to-br from-blue-600 to-emerald-500 w-110 flex flex-col items-center p-8 gap-4 rounded-xl">
        <h1 className="text-2xl font-bold">Inicia Sesion</h1>
        <p className="">Accede a tu cuenta</p>
        <div className="">
          <LoginForm/>
        </div>
      </div>
    </main>
  )
}