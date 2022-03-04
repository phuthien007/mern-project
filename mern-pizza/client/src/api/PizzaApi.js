import config from "./config";

const PizzaApi = {
    getAllPizza: (payload) => config.get(`v1/pizza`)
}


export default PizzaApi