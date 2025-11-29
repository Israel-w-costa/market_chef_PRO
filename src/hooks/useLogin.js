import axios from "axios";

export function useLogin() {
  async function login(email, password) {
    try {
      const resposta = await axios.post("http://localhost:4000/auth/login", {
        email,
        password
      });

      console.log("Login realizado!", resposta.data);
      return resposta.data;

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return null;
    }
  }

  return login;
}
