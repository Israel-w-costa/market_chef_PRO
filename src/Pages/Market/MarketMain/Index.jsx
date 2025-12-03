import { useRecipes } from "../../../hooks/useRecipal";
import {ShoppingCart,ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function MarketMain() {

  const { recipes } = useRecipes();

  return (
    <main className="bg-orange-100 py-12">
      <section className="container mx-auto flex justify-between items-center px-6">
        
        <header className="flex flex-col gap-4">
          <h1 className="text-orange-500 text-4xl font-bold">Meu Market</h1>
          <p className="text-gray-500 text-lg">
            Sua lista de compras organizada e inteligente
          </p>
        </header>

        <aside className="flex flex-col bg-red-500 text-white p-4 rounded-2xl shadow-md">
          <span className="text-3xl font-semibold">
            0/0
            </span>
          <span className="text-xs tracking-wide">
            Itens comprados
            </span>
        </aside>

      </section>
     {(!recipes || recipes.length === 0) ? (
  
  <section 
    className="text-center my-16 flex flex-col items-center space-y-4"
    aria-label="Lista vazia"
  >
    <ShoppingBag className="h-20 w-auto text-gray-400 mx-auto" />

    <h2 className="text-2xl font-semibold">Sua lista está vazia</h2>

    <p className="text-sm text-gray-500">
      Adicione receitas para começar suas compras
    </p>

    <Link 
      to="/"
      className="flex items-center justify-center gap-2 w-52 p-2 bg-orange-400 text-white rounded-md transition hover:bg-orange-500"
    >
      <ShoppingCart />
      <span className="font-medium">Explorar Receitas</span>
    </Link>
  </section>

) : (

  <section className="max-w-1xl lg:w-4xl mx-auto mt-12 p-2 space-y-4" aria-label="Lista de receitas">
    {recipes.map((recipe) => (
      <div
        key={recipe.id}
        className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
      >
        <div className="flex items-center gap-4">
          <img 
            src={recipe.image_url}
            alt={recipe.title}
            className="w-16 h-16 object-cover rounded-md"
          />

          <div>
            <h3 className="text-lg font-semibold">
              {recipe.title}
              </h3>
            <p className="text-sm text-gray-500">
              {recipe.instructions.length} 
              ingredientes</p>
          </div>
        </div>

        <Link 
          // to={`/recipe/${recipe.id}`}
          className="px-4 py-2 text-sm bg-orange-400 text-white rounded-md hover:bg-orange-500 transition text-nowrap"
        >
          Ver detalhes
        </Link>
      </div>
    ))}
  </section>

)}


    </main>
  );
}

export default MarketMain;
