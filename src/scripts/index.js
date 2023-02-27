import { renderPokemon} from "./render.js";
import { consomePokeAP} from "./requests.js";
import { searchPokemon,searchForKanto } from "./search.js";
// import { toast } from "./render.js";

const showList= ()=>{
    const main=document.querySelector('.render__pokemon')

    main.addEventListener('click',async()=>{
         const showRender= renderPokemon(await consomePokeAP())
    })
}
showList()

searchPokemon()

searchForKanto()

// toast('pokemon não encontrado')