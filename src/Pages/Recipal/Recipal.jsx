import { ChefHat } from "lucide-react";
import { useRecipes } from "../../hooks/useRecipal";

function Recipal() {
  const { recipes } = useRecipes();

  return (
    <>
      {(!recipes || recipes.length === 0) && (
        <div className="flex flex-col items-center mt-28 mb-36 opacity-90">
          <div className="flex flex-col items-center bg-white/60 backdrop-blur-md px-8 py-10 rounded-2xl shadow-lg animate-fadeIn">
            <ChefHat className="w-16 h-16 mb-3 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-700">
              Nenhuma receita encontrada
            </h3>
          </div>
        </div>
      )}

      {recipes && recipes.length > 0 && (
        <section className="mt-16 px-6">
          <div
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {recipes.map((recipe) => (
              <article
                key={recipe.id}
                role="listitem"
                className="
              bg-white rounded-xl shadow-md overflow-hidden 
                hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1
                transition-all duration-200"
              >
                <img
                  src={recipe.image_url}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {recipe.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {recipe.description}
                  </p>

                  <button className="mt-3 text-orange-500 font-medium hover:underline">
                    Ver detalhes →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Recipal;
