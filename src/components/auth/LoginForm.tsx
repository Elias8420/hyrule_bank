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
    <form onSubmit={onSubmit} className="flex flex-col items-center w-96 gap-6">
      <div className="w-84 flex flex-col">
        <label className="">Email</label>
        <input
        name="email" 
        type="email"
        autoComplete="email"
        className="border border-gray rounded-md p-2 focus:outline-none"
        placeholder="johndoe@gmail.com"
        />
      </div>
      <div className="w-84 flex flex-col">
        <label className="">Contraseñas</label>
        <input
        name="password" 
        type="password"
        autoComplete="current-password"
        className="border border-gray rounded-md p-2 focus:outline-none"
        placeholder="******"
        />
      </div>

      <button
      className=""
      >
        { "Iniciar sesion" }
      </button>
    </form>
  );
}