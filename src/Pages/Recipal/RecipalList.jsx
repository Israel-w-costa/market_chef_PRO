import { Search, ChefHat } from 'lucide-react';

import { useState } from 'react';

function RecipalList() {

  const { list, setList } = useState("");



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

      {!list && (
        <div className="flex flex-col items-center mt-28 mb-36 opacity-90">
          <div className="flex flex-col items-center bg-white/60 backdrop-blur-md px-8 py-10 rounded-2xl shadow-lg animate-fadeIn">
            <ChefHat className="w-16 h-16 mb-3 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-700">Nenhuma receita encontrada</h3>
          </div>
        </div>
      )}

      <section className="mt-16 px-6">
        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <article
            role="listitem"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="URL_DA_IMAGEM_AQUI"
              alt="Nome da receita"
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Nome da Receita
              </h3>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                Descrição rápida da receita, ingredientes principais
                ou algum texto curto que chame a atenção.
              </p>

              <button className="mt-3 text-orange-500 font-medium hover:underline">
                Ver detalhes →
              </button>
            </div>
          </article>

        </div>
      </section>


    </section>
  );
}

export default RecipalList;
