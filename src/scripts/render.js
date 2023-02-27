import {findPokemon} from "./requests.js";




const createPokemon= (pokemon)=>{

    const card=document.createElement('li')
    const pokemonName=document.createElement('h2')
    const pokemonImg=document.createElement('img')



    const numeroNaPokedex = pokemon.url.slice(34, -1)

    pokemonImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png`
    pokemonName.innerText=(`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`)
    
    card.append(pokemonName,pokemonImg)
    return card

}

const createPokemonUnic= (pokemon)=>{
  
    const card=document.createElement('li')
    const pokemonName=document.createElement('h2')
    const pokemonImg=document.createElement('img')



    const numeroNaPokedex = pokemon.species.url.slice(42, -1)

    pokemonImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png`
    pokemonName.innerText=pokemon.name

    card.append(pokemonName,pokemonImg)
    return card



}


const createPokemonKanto= (pokemon)=>{

    const card=document.createElement('li')
    const pokemonName=document.createElement('h2')
    const pokemonImg=document.createElement('img')



    const numeroNaPokedex = pokemon.pokemon_species.url.slice(42, -1)

    pokemonImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png`
    pokemonName.innerText=(`${pokemon.pokemon_species.name.charAt(0).toUpperCase()}${pokemon.pokemon_species.name.slice(1)}`)
    
    card.append(pokemonName,pokemonImg)
    return card

}

export const renderPokemon = async (array)=>{

    const pokebola=document.querySelector('.pokebola')

    pokebola.innerHTML=""

    
    array.results.forEach((pokemon) => {
         
            const pokemons= createPokemon(pokemon)
    
            pokebola.appendChild(pokemons)
    
    })

}



export const renderPokemonKanto= async (array)=>{

    const pokebola=document.querySelector('.pokebola')

    pokebola.innerHTML=""
    


array.pokemon_entries.forEach((pokemon) => {
    
        const pokemons= createPokemonKanto(pokemon)

        pokebola.appendChild(pokemons)

})
}




export const renderPokemonForName = async (array)=>{

    const pokebola=document.querySelector('.pokebola')

    pokebola.innerHTML=""
    
  const poke=[]
  poke.push(array)
    
poke.forEach((pokemon) => {
        const pokemons= createPokemonUnic(pokemon)

        pokebola.appendChild(pokemons)

})
}


export const toast=(message,color)=>{
    const toast=document.createElement('div')
    const messages=document.createElement('p')

    toast.classList.add('toast')
    message.innerText=message

    toast.appendChild(message)

    const main=document.querySelector('main')

    main.appendChild(toast)

}

