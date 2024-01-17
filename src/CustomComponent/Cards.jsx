import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import "./cards.css"

export default function Cards({pokemonName, pokemonIndex}){

    const [images, setImages] = useState()
    const navigate = useNavigate()

    const getImages = () =>{
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonIndex}/`)
            .then(response => response.json())
            .then(image => setImages(image.sprites.front_default))
    }

    useEffect(() => {
        getImages()
    }, [])

    return(
            <div className="cards" onClick={() => navigate("/details", {state: {name: pokemonName, image: images, index: pokemonIndex}})}>
                <img src={images}></img>
                <p>{pokemonName}</p>
            </div>
    )
}