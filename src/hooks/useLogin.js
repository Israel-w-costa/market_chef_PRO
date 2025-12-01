import axios from "axios";
import { useUser } from "../Context/useUser";

export function useLogin() {
  const { loginUser } = useUser();

  async function login(email, password) {
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password
      });

      const userData = response.data.user;
      loginUser(userData);

      console.log("Logado com sucesso:", userData);

    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  return login;
}
