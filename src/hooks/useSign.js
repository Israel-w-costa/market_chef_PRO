import axios from "axios"

export function useSign() {
    async function register(name, email, password) {
        
        try {
          const response = await axios.post("http://localhost:4000/auth/register", {
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
