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
        required={true}
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
        required={true}
        name="password" 
        type="password"
        autoComplete="current-password"
        className="border border-gray rounded-md p-2 focus:outline-none shadow-lg"
        placeholder="******"
        />
      </div>

      <button
      className="border border-white/70 p-3 rounded-xl bg-white/20 w-40 text-white font-bold hover:bg-white/40 transition-all duration-200"
      >
        { "Iniciar Sesión" }
      </button>
    </form>
  );
}