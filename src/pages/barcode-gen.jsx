import BarcodeGenComponent from "../components/barcodeGenComp";
import Footer from "../components/footer";
import Navbar from "../components/Nav";
import SEO from "../components/SEO"

function BarcodeGen(){
    return <div>
        <SEO 
        title="Home | Parakletus Publishing"
        description="From manuscript to market—fast, affordable, and personalized publishing support."
        keywords = "barcode generator, ISBN, generate Bar code"
      />
        <Navbar/>
        <BarcodeGenComponent/>
        <Footer/>
    </div>
}

export default BarcodeGen