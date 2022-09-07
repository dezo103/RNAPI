import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const api = {
    getAllPokemon() {
        return instance.get('/pokemon')
    },
    getCurrent() {
        return instance.get('/pokemon')
    }
}