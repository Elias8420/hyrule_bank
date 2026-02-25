import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return(
    <main className="min-h-screen bg-gradient-to-br from-[#2E4482] via-[#2C6E8A] to-[#1A8C7A]">
      <figure className="absolute inset-0 flex justify-center items-center -translate-x-70">
            <Image src={"/images/piggy.png"} width={450} height={450} alt="piggy" />
      </figure>
      <h1 className="text-4xl w-max mx-auto text-black mt-1 font-bold text-white absolute left-1/2 -translate-x-1/2 top-1/7 text-5xl">Banco de Hyrule</h1>
      <div className="absolute inset-0 bg-bl flex justify-center flex-col items-center ">
        <div className="form_container bg-gradient-to-br from-blue-700 to-emerald-600 w-110 flex flex-col items-center p-8 gap-4 rounded-xl border-2">
          <p className="text-2xl text-white text-shadow-(20) font-bold">Inicia Sesion</p>
          <p className="">Accede a tu cuenta</p>
          <div className="">
            <LoginForm/>
          </div>
        </div>
      </div>
      <figure className="absolute inset-0 flex justify-center items-center translate-x-70 ">
            <Image src={"/images/piggy.png"} width={450} height={450} className="scale-x-[-1]" alt="piggy" />
      </figure>
    </main>
  )
}