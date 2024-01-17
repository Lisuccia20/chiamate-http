import { useState, useEffect } from "react"
import Cards from "../../CustomComponent/Cards"
import "./pokemons.css"

export default function Pokemons(){
    const [pokemons, setPokemons] = useState([])
    const getPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
            .then(response => response.json())
            .then(name => {setPokemons(name.results)})
    }

    useEffect(() =>{
        getPokemons()
    },[])


    return(
        <>
        <div className="grid-wrapper">
            {pokemons.map((pokemon, index) => <Cards pokemonName = {pokemon.name} pokemonIndex = {index+1} />)}
        </div>
        </>
    )
}