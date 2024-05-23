import { listPokemons } from "./interface/interface"
import { PokemonDetails } from "./interface/interface";

export default function fetchPOkes():void{
    const url:string = `https://pokeapi.co/api/v2/pokemon?offset=40&limit=20`,
    
    $pokeBox: HTMLElement = <HTMLElement>document.getElementById("POkeBox"),
    fragment:Node = document.createDocumentFragment()

    fetch(url)
        .then(res => res.json())
        .then((res: listPokemons) => {
        res.results.forEach((pokemon) => {
// res.next

            const $figure: HTMLElement = document.createElement("figure"),
                $img: HTMLElement =document.createElement("img"),
                $figCapt: HTMLElement = document.createElement("figcaption"),
                $pokeName: Node = document.createTextNode(pokemon.name)

            fetch(pokemon.url)
            .then(res => res.json())
            .then((res: PokemonDetails) =>{
                 $img.setAttribute("src", res.sprites.front_default )
            })

                $img.setAttribute("alt", pokemon.name)
                $img.setAttribute("title", pokemon.name)
                $figCapt.appendChild($pokeName)
                $figure.appendChild($img)
                $figure.appendChild($figCapt)
                fragment.appendChild($figure)

               
        })  
        console.log(res)
        $pokeBox.appendChild(fragment);
    });
}