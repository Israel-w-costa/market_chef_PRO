import Header from "../../Components/Header/Index"
import Footer from "../../Components/Footer/Index"
import HeaderMarket from "./HeaderMarket"
import RecipalMarket from "./RecipalMarket"

function Market() {

  return (
    <>
    <Header/>
    <main className="bg-orange-100 p-12">
    <HeaderMarket/>
    <RecipalMarket/>
    </main>
    <Footer/>
    </>
  )
}

export default Market
