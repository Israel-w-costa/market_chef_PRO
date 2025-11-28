import { useEffect, useState } from "react";
import { api } from "../Services/api";

export function useRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try{
            const response = await api.get("/recipes");
            setRecipes(response.data);
        }
        catch(error){
            setError("Error ao carregar receitas");
            console.error(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return{
        recipes, loading, error
    };
}