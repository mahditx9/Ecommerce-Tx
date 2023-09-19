import { useState } from "react";
import Login from "../components/Auth/Login";
import SingUp from "../components/Auth/SingUp";
import Navbar from "../components/Navbar/Navbar";
function LoginPage() {
  const [status, setStatus] = useState("login");
  return (
    <>
      <Navbar displayCard={false} />
      <section className="h-[100vh] mt-10">
        {status === "login" ? (
          <Login onChangeStatus={() => setStatus("signUp")} />
        ) : (
          <SingUp onChangeStatus={() => setStatus("login")} />
        )}
      </section>
    </>
  );
}

export default LoginPage;
