import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import QrCodeGenerator from "./components/Generate/QrCodeGenerator";
import QrCodeScanner from "./components/Scan/QrCodeScanner";
import ScanHistory from "./components/ScanHistory";
import GenerateHistory from "./components/GenerateHistory";




export default function Layut(){
    return(
        <div>
            <Navigation />

           <Routes>
            <Route path="/generate"element={<QrCodeGenerator />} />
            <Route path="/scan"element={<QrCodeScanner />} />
            <Route path="/scanHistory" element={<ScanHistory />} />
            <Route path="/genirateHostory"  element={<GenerateHistory />} />
           </Routes>
        </div>
    )
}