import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react';
import  style from './QrCodeScanner.module.css'
import { SCAN_DATA } from '../../constants'
 
export default function QrCodeScanner(){
    const [scanned, setScannet] = useState(null)

    const scanHendler = (result) => {
    console.log(result);
    setScannet(result[0].rawVelue)

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

    console.log("kc", prevData);

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawVelue]))

    }

    console.log(SCAN_DATA);
    console.log("ddd", scanned);

    return(
        <div className={style.container}>
            <Scanner 
            onScan={scanHendler} 
            components={{audio: false, finder: false,}}
            styles={{ container: {width:200}}}
            />
            <p className={style.result}>{scanned}</p>
        </div>
    )
}