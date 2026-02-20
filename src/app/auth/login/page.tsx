import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return(
    <main className="flex justify-center">
      <div className="content-center h-screen">
        <h1 className="">Login</h1>
        <p className="">Acceder a tu cuenta</p>
        <div className="">
          <LoginForm/>
        </div>
      </div>
    </main>
  )
}