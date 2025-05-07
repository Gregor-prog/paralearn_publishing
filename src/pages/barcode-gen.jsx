import BarcodeGenComponent from "../components/barcodeGenComp";
import Footer from "../components/footer";
import Navbar from "../components/Nav";

function BarcodeGen(){
    return <div>
        <Navbar/>
        <BarcodeGenComponent/>
        <Footer/>
    </div>
}

export default BarcodeGen