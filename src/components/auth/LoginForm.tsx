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
    <form onSubmit={onSubmit} className="flex flex-col items-center w-96">
      <div className="w-84">
        <label className="">Email</label>
        <input
        name="email" 
        type="email"
        autoComplete="email"
        className=""
        placeholder="johndoe@gmail.com"
        />
      </div>
      <div className="w-84">
        <label className="">Contrasena</label>
        <input
        name="password" 
        type="password"
        autoComplete="current-password"
        className=""
        placeholder="****"
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