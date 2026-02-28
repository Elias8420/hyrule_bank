"use client"

import { LoginAction } from "@/utils/loginAction";
import { useState } from "react";

export function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); //Evita que al enviar el formulario, recargue la pagina

    
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "").trim(); //trim elimina los espacios de a los lados del texto
    const password = String(formData.get("password") ?? ""); // ?? "" le indica de que en caso este vacio, ponga texto vacio
    
    if(email != null && password != null)
      setLoading(true);
    
    const res = await LoginAction(email, password);

    setLoading(false);
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
        type={ showPassword ? "text" : "password"}
        autoComplete="current-password"
        className="border border-gray rounded-md p-2 focus:outline-none shadow-lg"
        placeholder="******"
        />
      </div>

      <button
      className="border border-white/70 p-3 rounded-xl bg-white/20 w-50 text-white font-bold hover:bg-white/40 transition-all duration-200"
      disabled={loading}
      >
        { loading ? 'Iniciando sesion...' : 'Iniciar Sesión' }
      </button>
    </form>
  );
}