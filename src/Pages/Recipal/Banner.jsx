import { Link } from "react-router";
import { ChefHat, ShoppingCart, Star } from "lucide-react";

function Banner() {
  return (
    <section className="relative flex flex-col items-center justify-center text-white h-[650px] bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200')] bg-cover bg-center">

      <div className="absolute inset-0 bg-black/50 "></div>

      <div className="relative flex flex-col items-center px-4 md:px-0">

        <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-2xl mt-8">
          <Star className="w-4 h-4 text-orange-400" />
          <span className="text-xs tracking-wide text-white">
            Receitas da Comunidade
          </span>
        </div>

        <h1 className="font-bold tracking-wide text-center leading-tight mt-6 
                       text-2xl max-w-sm 
                       md:text-5xl md:max-w-2xl">
          Encontre receitas incríveis e{" "}
          <strong className="text-orange-400">gere automaticamente</strong> sua lista de compras
        </h1>

        <p className="text-center mt-4 leading-relaxed text-sm max-w-sm 
                      md:max-w-xl md:text-base">
          Explore receitas enviadas pela comunidade, veja ingredientes e modo de
          preparo, e adicione tudo ao seu Market com um clique.
        </p>

        <div className="flex flex-col gap-4 mt-6 w-full max-w-sm md:flex-row md:max-w-none md:w-auto">

          <Link className="flex items-center justify-center gap-2 px-4 py-3 bg-white/80 text-gray-800 rounded-2xl shadow text-sm font-medium">
            <ChefHat className="w-4 h-4 text-orange-500" />
            Ver Receitas
          </Link>

          <Link to={"/market"} className="flex items-center justify-center gap-2 px-4 py-3 bg-white/80 text-gray-800 rounded-2xl shadow text-sm font-medium">
            <ShoppingCart className="w-4 h-4 text-orange-500" />
            Lista Inteligente
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
