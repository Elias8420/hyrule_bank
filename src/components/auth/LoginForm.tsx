"use client"

import { LoginAction } from "@/utils/loginAction";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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
        <div className="relative w-84">
          <input
          required={true}
          name="password" 
          type={ showPassword ? "text" : "password"}
          autoComplete="current-password"
          className="border border-gray rounded-md p-2 w-full focus:outline-none shadow-lg"
          placeholder="******"
          />
          <button 
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" //Cursor pointer era para que cambie la forma del mouse cuando se coloca sobre este
          type="button" //Se le especifica que es boton para que no haga submit e intente enviar el formulario
          onClick={() => setShowPassword(!showPassword)}
          >
            <Eye size={20}/>
          </button>
        </div>
      </div>

      <button
      className="border border-white/70 p-3 rounded-xl bg-white/20 w-50 text-white font-bold hover:bg-white/40 transition-all duration-200 cursor-pointer"
      disabled={loading}
      >
        { loading ? 'Iniciando sesion...' : 'Iniciar Sesión' }
      </button>
    </form>
  );
}