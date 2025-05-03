import AboutHome from "../components/aboutHome"
import Footer from "../components/footer"
import Header from "../components/Header"
import Navbar from "../components/Nav"
import NewsLetter from "../components/newsletter"
import ServiceHome from "../components/servicrHome"
import Stat from "../components/stats"
function Home(){
    return <div className="bg-[#ececfc]">
    <Navbar/>
    <Header/>
    <AboutHome/>
    <ServiceHome/>
    <Stat/>
    <NewsLetter/>
    <Footer/>
    </div>
}

export default Home