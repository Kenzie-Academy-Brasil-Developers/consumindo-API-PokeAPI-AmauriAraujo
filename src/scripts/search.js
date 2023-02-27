import { renderPokemonForName,renderPokemonKanto } from "./render.js"; 
import { findPokemon,consomePokeKanto,consomePokeJohto,consomePokeHoenn,consomePokeSinnoh,consomePokeUnova,consomePokeGalery,consomePokeAiola,consomePokeGalar, consomePokePaldea} from "./requests.js";

export const searchPokemon= ()=>{
    const input=document.querySelector('input')
    const button=document.querySelector('.btn__search')

    button.addEventListener('click',async()=>{
        const pokemonName=input.value
        const pokemon=  renderPokemonForName(await findPokemon(pokemonName))
    })

}
export const searchForKanto=()=>{
    const button__kanto=document.querySelector('.btn__kanto')
    const button_johto=document.querySelector('.btn__johto')
    const button_hoenn=document.querySelector('.btn__hoenn')
    const button_sinnoh=document.querySelector('.btn__sinnoh')
    const button_unova=document.querySelector('.btn__unova')
    const button_galery=document.querySelector('.btn__galery')
    const button_aiola=document.querySelector('.btn__aiola')
    const button_galar=document.querySelector('.btn__galar')
    const button_paldea=document.querySelector('.btn__paldea')


    button__kanto.addEventListener('click',async()=>{
        const kanto= renderPokemonKanto(await consomePokeKanto())
})
   button_johto.addEventListener('click',async()=>{
        const johto= renderPokemonKanto(await consomePokeJohto())
     })

     button_hoenn.addEventListener('click',async()=>{
        const hoenn= renderPokemonKanto(await consomePokeHoenn())
     })
     button_sinnoh.addEventListener('click',async()=>{
        const sinooh= renderPokemonKanto(await consomePokeSinnoh())
     })

     button_unova.addEventListener('click',async()=>{
        const unova= renderPokemonKanto(await consomePokeUnova())
     })
     button_galery.addEventListener('click',async()=>{
        const galery= renderPokemonKanto(await consomePokeGalery())
     })
     button_aiola.addEventListener('click',async()=>{
        const galery= renderPokemonKanto(await consomePokeAiola())
     })
     button_galar.addEventListener('click',async()=>{
        const galar= renderPokemonKanto(await consomePokeGalar())
     })
     button_paldea.addEventListener('click',async()=>{
        const paldea= renderPokemonKanto(await consomePokePaldea())
     })
}