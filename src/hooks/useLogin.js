import api from "../Services/api"
import { useUser } from "../Context/useUser";

export function useLogin() {
  const { loginUser } = useUser();

  async function login(email, password) {
    const response = await api.post("auth/logi", {
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
