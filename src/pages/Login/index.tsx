import { FC, FormEvent, useEffect, useState } from "react";
import { Layout } from "../../components";
import { useAuth } from "../../hooks";
import { WithAuth } from "../../hoc";
import { Form } from 'react-bootstrap'


const Login: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
  
  const { login, userSession } = useAuth();
    
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {
        await login(email, password);
        
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(userSession));
    }, [userSession]);
  
    // if (userSession) {
    //   localStorage.setItem("user", JSON.stringify(userSession));
    // }
  
    return (
      <Layout mainClass="login">
        <h4>Por favor ingrese su usuario:</h4>
        <Form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="pass">Contraseña</label>
            <input
              id="pass"
              type="password"
              name="pass"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
  
          <button type="submit">Iniciar sesión</button>
        </Form>
      </Layout>
    );
  };
  
  export const LoginPage = WithAuth(Login);