import { ChefHat, Users } from "lucide-react"

function CardAdmin() {
    return (
        <section className="flex flex-col md:flex-row justify-center gap-8 md:gap-10">

            <article className="bg-white p-6 md:p-10 border border-gray-200 rounded-xl shadow-md flex-1">
                <div className="flex items-center gap-4 justify-between mb-4">
                    <span className="text-lg font-medium whitespace-nowrap">Total de receitas</span>
                    <ChefHat className="w-16 h-16 p-3 bg-orange-400 text-white rounded-xl" />
                </div>
                <span className="text-3xl font-semibold text-gray-800">0</span>
            </article>

            <article className="bg-white p-6 md:p-10 border border-gray-200 rounded-xl shadow-md flex-1">
                <div className="flex items-center gap-6 justify-between mb-4">
                    <span className="text-lg font-medium whitespace-nowrap">Usuários cadastrados</span>
                    <Users className="w-16 h-16 p-3 bg-orange-400 text-white rounded-xl" />
                </div>
                <span className="text-3xl font-semibold text-gray-800">0</span>
            </article>

        </section>
    )
}

export default CardAdmin