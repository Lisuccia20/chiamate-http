import {useLocation} from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import "./pokemonDetails.css"


export default function PokemonDetails(){
    const {state} = useLocation()
    const [generation, setGeneration] = useState()

    const getDetails = () =>{
        fetch(`https://pokeapi.co/api/v2/ability/${state.index}`)
            .then(response => response.json())
            .then(details => setGeneration(details.generation.name))
    }
    

    useEffect(() => {
        getDetails()
    }, [])

    return(
        <div className="container">
            <div className="detailscard">
                <h1>{state.name}:</h1>
                <img src={state.image} alt="pokemon front"/>
                <h3>generazione: </h3>
                <p>{generation}</p>
            </div>
            
        </div>
    )
}