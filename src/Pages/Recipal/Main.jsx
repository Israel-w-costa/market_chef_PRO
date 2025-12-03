import { Search, ChefHat } from 'lucide-react';
import { useRecipes } from "../../hooks/useRecipal";
import Recipal from './Recipal';
import { useState } from 'react';

function Main() {

  const { recipes } = useRecipes();
  const [filter,setFilter] = useState("");

  function handleSearch (e) {
    const inputValue = e.target.value.toLowerCase();

    const filtered = recipes.filter(recipe =>{
      return recipe.title.toLowerCase().includes(inputValue)
    } 
    )
    setFilter(()=>filtered)
    console.log(filter)
  }
  

  return (
    <section className="p-4 bg-orange-100">
      <label
        htmlFor="search"
        className="flex items-center gap-2 w-full max-w-3xl border border-orange-400 rounded-3xl px-4 py-3 mt-10 m-auto
             focus-within:border-orange-500 transition">

        <Search className="w-5 h-5 text-gray-500" />

        <input
          type="text"
          name="search"
          id="search"
          onChange={(e)=>handleSearch(e)}
          placeholder="Buscar Receitas por nome ou ingrediente..."
          className="w-full outline-none"
        />
      </label>

      <h2 className="text-2xl text-orange-400 font-semibold tracking-wide m-6 sm:mt-20 sm:ml-16 animate-fadeIn text-nowrap">
        Receitas da Comunidade
      </h2>

      <Recipal filter={filter}/>


    </section>
  );
}

export default Main;
