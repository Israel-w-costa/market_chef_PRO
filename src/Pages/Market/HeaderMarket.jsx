function HeaderMarket () {

  return(
    
<section className="container mx-auto flex justify-between items-center px-6 py-12">
        
        <header className="flex flex-col gap-4">
          <h1 className="text-orange-500 text-4xl font-bold">
            Meu Market
            </h1>
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
  )
}

export default HeaderMarket