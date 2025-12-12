import {useLogin} from "../../hooks/useUsers"

function TableAdmin() {

  const {users} = useLogin();
  console.log(users)

  return (
    <section className="p-6 md:p-10">
      {users && <p>
        {users}
        </p>}
      {users? <p>{users}</p> :<p>o</p>}
      <nav className="flex justify-center items-center w-fit bg-white rounded-2xl shadow-md mb-10">
        <ul className="flex">
          <li>
            <button className="p-6 rounded-lg hover:bg-orange-200 border border-white font-medium  cursor-pointer">
              Todas as Receitas
            </button>
          </li>
          <li>
            <button className="p-6 rounded-lg hover:bg-orange-200 border border-white font-medium  cursor-pointer">
              Usuários Cadastrados
            </button>
          </li>
        </ul>
      </nav>



      <table className="min-w-full bg-orange-200  border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-orange-200">
          <tr>
            <th className="px-4 py-4 text-left">Usuário</th>
            <th className="px-20 py-4 text-right">Role</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t border-gray-200 hover:bg-orange-50">
            <td className="px-4 py-4">
              <div className="flex flex-col">
                <span className="font-medium">Nome da Pessoa</span>
                <span className="text-sm text-gray-600">email@pessoa.com</span>
              </div>
            </td>
            <td className="px-18 py-4 text-right">Admin</td>
          </tr>

          <tr className="border-t border-gray-200 hover:bg-orange-50">
            <td className="px-4 py-2">
              <div className="flex flex-col">
                <span className="font-medium">Outro Nome</span>
                <span className="text-sm text-gray-600">email@exemplo.com</span>
              </div>
            </td>
            <td className="px-15 py-2 text-right">Usuário</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default TableAdmin;
