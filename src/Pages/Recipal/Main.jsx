import { Search, ChefHat } from 'lucide-react';
import Recipal from './Recipal';

function Main() {


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
          placeholder="Buscar Receitas por nome ou ingrediente..."
          className="w-full outline-none"
        />
      </label>

      <h2 className="text-2xl text-orange-400 font-semibold tracking-wide m-6 sm:mt-20 sm:ml-16 animate-fadeIn text-nowrap">
        Receitas da Comunidade
      </h2>

      <Recipal/>


    </section>
  );
}

export default Main;
