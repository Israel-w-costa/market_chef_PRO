import Header from "../../Components/Header/Index"
import Footer from "../../Components/Footer/Index"
import HeaderAdmin from "./HeaderAdmin"
import CardAdmin from "./CardAdmin"
import TableAdmin from "./TableAdmin"

function Admin() {

  return (
    <>
      <Header />
      <main className="p-8 md:p-20 bg-orange-100 min-h-screen">
        <HeaderAdmin />
        <CardAdmin />
        <TableAdmin />
      </main>
      <Footer />
    </>
  )
}

export default Admin
