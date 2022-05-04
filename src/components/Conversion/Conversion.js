import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useEffect, useState} from "react";
import s from './Conversion.module.css'
import { useForm } from "react-hook-form";
import conversionService from "../../services/conversion.service";


export default function Conversion(){
    const {handleSubmit, register} = useForm()
    const [firstValue, setFirstValue] = useState();
    const [secondValue, setSecondValue] = useState();
    const [conversionResult, setConversionResult] = useState()

    const firstHandleChange = (event) => {
        setFirstValue(event.target.value);
    };

    const secondHandleChange = (event) => {
        setSecondValue(event.target.value);
    };

    const convert = ({amount})=>{
        conversionService.getConversionResult(firstValue,secondValue,amount).then(value=>setConversionResult(value.conversion_result))
    }

    return(
        <div className={s.wrap}>
            <div className={s.container}>
                <div className={s.select}>
                    <Box sx={{ minWidth: 150 }}>
                        <FormControl fullWidth>
                            <InputLabel id="first">Currency</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={firstValue}
                                label="Currency"
                                onChange={firstHandleChange}
                            >
                                <MenuItem value={'UAH'}>UAH</MenuItem>
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'EUR'}>EUR</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 150 }}>
                        <FormControl fullWidth>
                            <InputLabel id="second">Currency</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={secondValue}
                                label="Currency"
                                onChange={secondHandleChange}
                            >
                                <MenuItem value={'UAH'}>UAH</MenuItem>
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'EUR'}>EUR</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div>
                    <form onSubmit={handleSubmit(convert)}>
                        <div className={s.inputBlock}>
                            <label>
                                <input  className={s.input} type="text" {...register('amount',{required:true})} placeholder={'Amount'}/>
                            </label>
                        </div>
                        <button className={s.btn}>Convert</button>
                    </form>
                </div>
            </div>
            <div className={s.amount}>
                {conversionResult ? conversionResult : null}
            </div>
        </div>

    )
}