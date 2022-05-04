import axiosService from "./axios.service";

const conversionService = {
    getConversionResult:(from,to,amount)=> axiosService.get(`https://v6.exchangerate-api.com/v6/986d6de3d4626853250eed73/pair/${from}/${to}/${amount}`).then(value => value.data),
}

export default conversionService