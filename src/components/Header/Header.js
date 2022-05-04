import s from './Header.module.css'
import {useEffect, useState} from "react";
import exchangeService from "../../services/exchange.service";
export default function Header(){

    const [firstRate,setFirstRate] = useState()
    const [secondRate,setSecondRate] = useState()

    useEffect(()=>{
       exchangeService.getExchangeRate().then(value => {
           setFirstRate(value.find(item=> item['ccy'] == 'USD'))
           setSecondRate(value.find(item=> item['ccy'] == 'EUR'))
       })
    },[])


    return(
        <div className={s.container}>
            { firstRate ? (
                <div>
                    <div className={s.value}>
                        USD: {firstRate.buy.slice(0,5)} | {firstRate.sale.slice(0,5)}

                    </div>
                    <div className={s.value}>
                        EUR: {secondRate.buy.slice(0,5)} | {secondRate.sale.slice(0,5)}
                    </div>
                </div>
            ): null}
        </div>
    )
}