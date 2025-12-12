import {api} from "../Services/api";
import { useState } from "react";

export function useLogin () {
    const [users,setUsers] = useState([]);

    async function fethAllUsers() {
        try{
            const response = await api.get("/users");
            setUsers( response.data);
            console.log(response.data)
        }
        catch (e) {
            console.error(e)

        }
        
    }


    return {users, fethAllUsers}
}