import AboutHome from "../components/aboutHome"
import Header from "../components/Header"
import Navbar from "../components/Nav"
import NewsLetter from "../components/newsletter"
import ServiceHome from "../components/servicrHome"
import Stat from "../components/stats"
function Home(){
    return <>
    <Navbar/>
    <Header/>
    <AboutHome/>
    <ServiceHome/>
    <Stat/>
    <NewsLetter/>
    </>
}

export default Home