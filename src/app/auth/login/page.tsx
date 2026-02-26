import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return(
    <main className="min-h-screen bg-gradient-to-br from-[#2E4482] via-[#2C6E8A] to-[#1A8C7A] overflow-hidden">
      <figure className="absolute inset-0 flex justify-center items-center -translate-x-62">
            <Image src={"/images/piggy.png"} width={450} height={450} alt="piggy" />
      </figure>
      <div className="absolute inset-0 bg-bl flex justify-center flex-col items-center ">
        <div className="form_container bg-gradient-to-br from-blue-700 to-emerald-600 w-110 flex flex-col items-center p-8 gap-4 rounded-xl border-2 z-10">
          <h1 className="text-4xl w-max mx-auto text-black mt-1 font-bold text-white top-1/7 text-4xl [text-shadow:_0_4px_6px_rgba(0,0,0,0.6)]">Banco de Hyrule</h1>
          <p className="text-lg [text-shadow:_0_4px_4px_rgba(0,0,0,0.5)]">Accede a tu cuenta</p>
          <p className="text-2xl text-white [text-shadow:_0_4px_4px_rgba(0,0,0,0.5)] font-bold">Inicia Sesión</p>
          <div className="">
            <LoginForm/>
          </div>
        </div>
      </div>
      <figure className="absolute inset-0 flex justify-center items-center translate-x-62">
            <Image src={"/images/piggy.png"} width={450} height={450} className="scale-x-[-1]" alt="piggy" />
      </figure>
    </main>
  )
}