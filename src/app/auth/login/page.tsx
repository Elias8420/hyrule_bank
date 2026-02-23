import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return(
    <main className="min-h-screen">
      <div className="absolute inset-0 bg-bl flex justify-center flex-col items-center ">
        <h1 className="text-4xl w-max mx-auto text-black mt-1">Banco de Hyrule</h1>
        <div className="form_container bg-gradient-to-br from-blue-800 to-emerald-700 w-110 flex flex-col items-center p-8 gap-4 rounded-xl border-2">
          <p className="text-2xl text-white text-shadow-(20) font-bold">Inicia Sesion</p>
          <p className="">Accede a tu cuenta</p>
          <div className="">
            <LoginForm/>
          </div>
        </div>
      </div>
    </main>
  )
}