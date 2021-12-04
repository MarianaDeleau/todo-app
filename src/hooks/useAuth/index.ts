import { useState } from "react";
import { useHistory } from "react-router";
import { getUsers } from "../../api";
import { User } from "../../types";

const useAuth = () => {
  const [userSession, setUserSession] = useState<User>(
    JSON.parse(localStorage.getItem("user")!)
  );
  const { push } = useHistory();
  
  const login = async (user: string, password: string) => {
    const users = await getUsers();
 

    const userLogged = users.find((u) => {
      if (u.email === user && u.password === password) {
        return true;
      }
      return false;
    });

    if (userLogged) {
      setUserSession({ ...userLogged });
      push('/dashboard')
    } else {
      push('/')
    }   

  };

  const logout = () => {

    if (userSession) {
      localStorage.removeItem("user")
      push('/')
   }
  };

  const recoveryPassword = () => {};

  return { login, userSession, logout };
};

export { useAuth };

//{"id":"-MlVIxa4Xgt_iT8cL9fG","email":"marianadeleau@gmail.com","gender":"mujer","name":"Mariana Deleau","password":"1234"}
