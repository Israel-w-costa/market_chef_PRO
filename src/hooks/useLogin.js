import axios from "axios";
import { useUser } from "../Context/useUser";

export function useLogin() {
  const { loginUser } = useUser();

  async function login(email, password) {
    const response = await axios.post("http://localhost:4000/auth/login", {
      email,
      password
    });

    const userData = response.data.user;
    const token = response.data.token
    loginUser(userData);

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData))

    return userData;
  }

  return login;
}
