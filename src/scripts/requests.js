

const requestHeaders= {

'content-type': 'application/json'
}

export const consomePokeAP=  async ()=>{
const search=document.querySelector('#search')
const loading = document.querySelector('#loading')
const main=document.querySelector('main')

 const pokemons= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1279`, {
    method: 'GET',
    headers: requestHeaders
 })
.then((response)=>{
    if(response.ok){
        return response.json()
    }else{
        response.json().then((error)=>{
            console.log(error)
        })
      
    }
    
})

main.classList.remove('altura__main')
loading.classList.add('hidden')
search.classList.add('show')
return pokemons
}



export const consomePokeKanto=  async ()=>{
    const search=document.querySelector('#search')
    const loading = document.querySelector('#loading')
    const main=document.querySelector('main')
    
     const pokemons= await fetch(`https://pokeapi.co/api/v2/pokedex/2/`, {
        method: 'GET',
        headers: requestHeaders
     })
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then((error)=>{
                console.log(error)
            })
          
        }
        
    })
    
    main.classList.remove('altura__main')
    loading.classList.add('hidden')
    search.classList.add('show')
    return pokemons
    }

    
export const consomePokeJohto=  async ()=>{
    const search=document.querySelector('#search')
    const loading = document.querySelector('#loading')
    const main=document.querySelector('main')
    
     const pokemons= await fetch(`https://pokeapi.co/api/v2/pokedex/3/`, {
        method: 'GET',
        headers: requestHeaders
     })
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then((error)=>{
                console.log(error)
            })
          
        }
        
    })
    
    main.classList.remove('altura__main')
    loading.classList.add('hidden')
    search.classList.add('show')
    return pokemons
    }

      
export const consomePokeHoenn=  async ()=>{
    const search=document.querySelector('#search')
    const loading = document.querySelector('#loading')
    const main=document.querySelector('main')
    
     const pokemons= await fetch(`https://pokeapi.co/api/v2/pokedex/4/`, {
        method: 'GET',
        headers: requestHeaders
     })
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then((error)=>{
                console.log(error)
            })
          
        }
        
    })
    
    main.classList.remove('altura__main')
    loading.classList.add('hidden')
    search.classList.add('show')
    return pokemons
    }

     
    export const consomePokeSinnoh=  async ()=>{
        const search=document.querySelector('#search')
        const loading = document.querySelector('#loading')
        const main=document.querySelector('main')
        
         const pokemons= await fetch(`https://pokeapi.co/api/v2/pokedex/5/`, {
            method: 'GET',
            headers: requestHeaders
         })
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                response.json().then((error)=>{
                    console.log(error)
                })
              
            }
            
        })
        
        main.classList.remove('altura__main')
        loading.classList.add('hidden')
        search.classList.add('show')
        return pokemons
        }

        export const consomePokeUnova=  async ()=>{
            const search=document.querySelector('#search')
            const loading = document.querySelector('#loading')
            const main=document.querySelector('main')
            
             const pokemons= await fetch(`https://pokeapi.co/api/v2/pokedex/9/`, {
                method: 'GET',
                headers: requestHeaders
             })
            .then((response)=>{
                if(response.ok){
                    return response.json()
                }else{
                    response.json().then((error)=>{
                        console.log(error)
                    })
                  
                }
                
            })
            
            main.classList.remove('altura__main')
            loading.classList.add('hidden')
            search.classList.add('show')
            return pokemons
            }


            export const consomePokeGalery=  async ()=>{
                const search=document.querySelector('#search')
                const loading = document.querySelector('#loading')
                const main=document.querySelector('main')
                
                 const pokemons= await fetch(`https://pokeapi.co/api/v2/pokedex/12/`, {
                    method: 'GET',
                    headers: requestHeaders
                 })
                .then((response)=>{
                    if(response.ok){
                        return response.json()
                    }else{
                        response.json().then((error)=>{
                            console.log(error)
                        })
                      
                    }
                    
                })
                
                main.classList.remove('altura__main')
                loading.classList.add('hidden')
                search.classList.add('show')
                return pokemons
                }
    

                export const consomePokeAiola=  async ()=>{
                    const search=document.querySelector('#search')
                    const loading = document.querySelector('#loading')
                    const main=document.querySelector('main')
                    
                     const pokemons= await fetch(`https://pokeapi.co/api/v2/pokedex/16/`, {
                        method: 'GET',
                        headers: requestHeaders
                     })
                    .then((response)=>{
                        if(response.ok){
                            return response.json()
                        }else{
                            response.json().then((error)=>{
                                console.log(error)
                            })
                          
                        }
                        
                    })
                    
                    main.classList.remove('altura__main')
                    loading.classList.add('hidden')
                    search.classList.add('show')
                    return pokemons
                    }


                    export const consomePokeGalar=  async ()=>{
                        const search=document.querySelector('#search')
                        const loading = document.querySelector('#loading')
                        const main=document.querySelector('main')
                        
                         const pokemons= await fetch(`https://pokeapi.co/api/v2/pokedex/27/`, {
                            method: 'GET',
                            headers: requestHeaders
                         })
                        .then((response)=>{
                            if(response.ok){
                                return response.json()
                            }else{
                                response.json().then((error)=>{
                                    console.log(error)
                                })
                              
                            }
                            
                        })
                        
                        main.classList.remove('altura__main')
                        loading.classList.add('hidden')
                        search.classList.add('show')
                        return pokemons
                        }
    

                        export const consomePokePaldea=  async ()=>{
                            const search=document.querySelector('#search')
                            const loading = document.querySelector('#loading')
                            const main=document.querySelector('main')
                            
                             const pokemons= await fetch(`https://pokeapi.co/api/v2/pokedex/31/`, {
                                method: 'GET',
                                headers: requestHeaders
                             })
                            .then((response)=>{
                                if(response.ok){
                                    return response.json()
                                }else{
                                    response.json().then((error)=>{
                                        console.log(error)
                                    })
                                  
                                }
                                
                            })
                            
                            main.classList.remove('altura__main')
                            loading.classList.add('hidden')
                            search.classList.add('show')
                            return pokemons
                            }

export const findPokemon= async(pokemonName)=>{
    const loading = document.querySelector('#loading')
    const main=document.querySelector('main')

    const pokemon= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,{
        method: 'GET',
        headers: requestHeaders
    })
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then((error)=>{
               const notFound= toast('pokemon não encontrado')
            })
          
        }
        
    })
    main.classList.add('main__pokeUnic')

    return pokemon

    

}



