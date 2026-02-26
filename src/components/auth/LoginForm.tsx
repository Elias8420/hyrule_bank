"use client"

import { LoginAction } from "@/utils/loginAction";

export function LoginForm() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); //Evita que al enviar el formulario, recargue la pagina

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "").trim(); //trim elimina los espacios de a los lados del texto
    const password = String(formData.get("password") ?? ""); // ?? "" le indica de que en caso este vacio, ponga texto vacio

    const res = await LoginAction(email, password);
  }

  return(
    <form onSubmit={onSubmit} className="flex flex-col items-center w-96 gap-7">
      <div className="w-84 flex flex-col">
        <label className="">Email</label>
        <input
        name="email" 
        type="email"
        autoComplete="email"
        className="border border-gray rounded-md p-2 focus:outline-none shadow-lg"
        placeholder="johndoe@gmail.com"
        />
      </div>
      <div className="w-84 flex flex-col">
        <label className="">Contraseña</label>
        <input
        name="password" 
        type="password"
        autoComplete="current-password"
        className="border border-gray rounded-md p-2 focus:outline-none shadow-lg"
        placeholder="******"
        />
      </div>

      <button
      className="border border-white/20 p-3 rounded-xl text-black bg-white/50 w-40 bg-clip-text text-transparent font-bold"
      >
        { "Iniciar Sesión" }
      </button>
    </form>
  );
}