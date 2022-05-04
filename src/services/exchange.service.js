import axiosService from "./axios.service";

const exchangeService = {
    getExchangeRate:()=> axiosService.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(value => [value.data[0],value.data[1]]),
}

export default exchangeService


