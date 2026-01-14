import { QRCodeSVG } from "qrcode.react"
import { useState } from "react";
import { GENERATE_DATA, SCAN_DATA } from '../../constants'

import s from "./qrCodeGenerator.module.css"


export default function QrCodeGenerator(){
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    

    const onClickHandler = (event) => {
    //  console.log('lpflpe');

    const prevData =JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData,value]))

     setResult(value)
     setValue('')
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('')
        // console.log("1", event.target.value);
    }
      
    
    console.log("result:", result);

    return(
        <div className={s.container}>
            
            <input type="text" placeholder="Введите текст..." value={value} onChange={onChangeHandler} className={s.input} />
            <button type="button" className={s.button} onClick={onClickHandler}>Сгенерировать QR</button>
            <div className={s.qrWrapper}>
            {result !== '' &&  <QRCodeSVG value={value}  size={200}/>}
            </div>
        </div>
    )
}