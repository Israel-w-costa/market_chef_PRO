import api from "../Services/api";

export function useSign() {
    async function register(name, email, password) {
        
        try {
          const response = await api.post("/auth/register", 
            {
            name,
            email,
            password
          });
    
          console.log(response.data);
        } catch (error) {
          console.error(error);
    }
    }
    return register;
  }
