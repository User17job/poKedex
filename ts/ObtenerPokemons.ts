import { PokemonDetails } from "./interface/interface";
export default function ObtenerPOkes():void{
  
    const inputSeek: HTMLInputElement | null = <HTMLInputElement>document.getElementById("input"),

    $pokeBox: HTMLElement = <HTMLElement>document.getElementById("POkeBox"),
    fragment:Node = document.createDocumentFragment()

        alert(`quieres una amigo pokemon llamado, ${inputSeek?.value}`)
        let parameter = inputSeek?.value.toLocaleLowerCase();
  
        const url: string = ` https://pokeapi.co/api/v2/pokemon/${parameter}`; 
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            const pokemon = res///
            console.log(pokemon);
            // const PokConta = document.querySelector('#POkeBox');

            // PokConta?.innerHTML=``
            const $figure: HTMLElement = document.createElement("figure"),
            $img: HTMLElement =document.createElement("img"),
            $figCapt: HTMLElement = document.createElement("figcaption"),
            $pokeName: Node = document.createTextNode(pokemon.name);

            $img.setAttribute("alt", pokemon.name)
            $img.setAttribute("title", pokemon.name)
            $img.setAttribute("src", pokemon.sprites.front_default)
            $figCapt.appendChild($pokeName)
            $figCapt.classList.add("figCapPok")
            
            $figure.appendChild($img)
            $figure.classList.add("buu")
            $figCapt.onclick=(event)=>{check(event)} 
            $figure.classList.add("figurePok")
            $figure.appendChild($figCapt)
            $pokeBox.innerHTML=``;
            $pokeBox.appendChild($figure)
                console.log(res)
            })
        .catch((Error) => {
            console.log(Error, "Try with the Id or Name of the pokemon");
            let h1 = document.createElement("div");
            h1.textContent="Try with the Id or Name of the pokemon";
            h1.classList.add("h1h1")
            $pokeBox.innerHTML=``;
            $pokeBox.appendChild(h1);
        })

        async function check(event:MouseEvent){
            // alert("hia")event.target as HTMLElement
            const elementoClicado =event.target as HTMLElement;
            const textoElemento = elementoClicado.textContent;
            console.log('Texto del elemento clicado:', textoElemento);
          
        if(textoElemento){
            try {
                const pokeBox = <HTMLElement>document.getElementById("POkeBox"),
                    fragment:Node = document.createDocumentFragment()
                      
                        const $figure: HTMLElement = document.createElement("section"),
                            $img: HTMLElement =document.createElement("img"),
                            $figCapt: HTMLElement = document.createElement("div")
                            
                        fetch(`https://pokeapi.co/api/v2/pokemon/${textoElemento}`)
                        .then(res => res.json())
                        .then((res: PokemonDetails) =>{
                            let miPokemon = res;
                            $img.setAttribute("src", res.sprites.front_default )
                      
                            $figCapt.classList.add("figCapPokk")
                            $figCapt.setAttribute("onclick","check()")
                            $figCapt.onclick=(event)=>{check(event)} 
                            $figCapt.textContent=res.name
                            $figure.appendChild($img)
                            $figure.classList.remove("buu")
                            $figure.classList.add("figurePokk")
                            // $figure.appendChild($figCapt)
                            fragment.appendChild($figure)
                            
                            let config = `
                            <div class="DDD">
                            <figure><img src="${res.sprites.front_default}" /></figure>
                            <li>Id: ${res.id}</li>
                            <li>Name: ${res.name}</li>
                            <li>Base Experience: ${res.base_experience}</li>
                            <li>Abilities: ${res.abilities[0].ability.name}</li>
                            <li>Type(s): ${res.types[0].type.name}</li>
                            <li>weight: ${res.weight}</li><br><br>
                            <p class="DDDd"><b>Stats:</b><p>
                            <ol>
                                <li>------Hp: ${res.stats[0].base_stat}</li>
                                <li>------Attack: ${res.stats[1].base_stat}</li>
                                <li>------Defense: ${res.stats[2].base_stat}</li>
                                <li>------Special-Attack: ${res.stats[3].base_stat}</li>
                                <li>------Special-Defense: ${res.stats[4].base_stat}</li>
                                <li>------Speed: ${res.stats[5].base_stat}</li>
                            </ol>
                        </div>
                        `;
                        if (res.types[1]) {
                            if (res.abilities[1]) {
                                Swal.fire({
                                    title: res.name,
                                    width: 600,
                                    padding: "0em",
                                    color: "#fffff",
                                    html: `
                                    <div class="DDD">
                                    <figure><img src="${res.sprites.front_default}" /></figure>
                                    <li>Id: ${res.id}</li>
                                    <li>Name: ${res.name}</li>
                                    <li>Base Experience: ${res.base_experience}</li>
                                    <li>Abilities: ${res.abilities[0].ability.name} and ${res.abilities[1].ability.name}</li>
                                    <li>Type(s): ${res.types[0].type.name}_&_${res.types[1].type.name}</li>
                                    <li>weight: ${res.weight}</li><br><br>
                                    <p class="DDDd"><b>Stats:</b><p>
                                    <ol>
                                        <li>------Hp: ${res.stats[0].base_stat}</li>
                                        <li>------Attack: ${res.stats[1].base_stat}</li>
                                        <li>------Defense: ${res.stats[2].base_stat}</li>
                                        <li>------Special-Attack: ${res.stats[3].base_stat}</li>
                                        <li>------Special-Defense: ${res.stats[4].base_stat}</li>
                                        <li>------Speed: ${res.stats[5].base_stat}</li>
                                    </ol>
                                </div>
                                `
                                });
                            }
                            else {
                                Swal.fire({
                                    title: res.name,
                                    width: 600,
                                    padding: "0em",
                                    color: "#fffff",
                                    html: `
                                    <div class="DDD">
                                    <figure><img src="${res.sprites.front_default}"/></figure>
                                    <li>Id: ${res.id}</li>
                                    <li>Name: ${res.name}</li>
                                    <li>Base Experience: ${res.base_experience}</li>
                                    <li>Abilities: ${res.abilities[0].ability.name}</li>
                                    <li>Type(s): ${res.types[0].type.name}_&_${res.types[1].type.name}</li>
                                    <li>weight: ${res.weight}</li><br><br>
                                    <p class="DDDd"><b>Stats:</b><p>
                                    <ol>
                                        <li>------Hp: ${res.stats[0].base_stat}</li>
                                        <li>------Attack: ${res.stats[1].base_stat}</li>
                                        <li>------Defense: ${res.stats[2].base_stat}</li>
                                        <li>------Special-Attack: ${res.stats[3].base_stat}</li>
                                        <li>------Special-Defense: ${res.stats[4].base_stat}</li>
                                        <li>------Speed: ${res.stats[5].base_stat}</li>
                                    </ol>
                                </div>
                                `
                                });
                            }
                        }
                        if (res.types[0]) {
                            if (res.abilities[1]) {
                                Swal.fire({
                                    title: res.name,
                                    width: 600,
                                    padding: "0em",
                                    color: "#fffff",
                                    html: `
                                    <div class="DDD">
                                    <figure><img src="${res.sprites.front_default}" /></figure>
                                    <li>Id: ${res.id}</li>
                                    <li>Name: ${res.name}</li>
                                    <li>Base Experience: ${res.base_experience}</li>
                                    <li>Abilities: ${res.abilities[0].ability.name} and ${res.abilities[1].ability.name}</li>
                                    <li>Type(s): ${res.types[0].type.name}</li>
                                    <li>weight: ${res.weight}</li><br><br>
                                    <p class="DDDd"><b>Stats:</b><p>
                                    <ol>
                                        <li>------Hp: ${res.stats[0].base_stat}</li>
                                        <li>------Attack: ${res.stats[1].base_stat}</li>
                                        <li>------Defense: ${res.stats[2].base_stat}</li>
                                        <li>------Special-Attack: ${res.stats[3].base_stat}</li>
                                        <li>------Special-Defense: ${res.stats[4].base_stat}</li>
                                        <li>------Speed: ${res.stats[5].base_stat}</li>
                                    </ol>
                                </div>
                                `
                                });
                            }
                            else {
                                Swal.fire({
                                    title: res.name,
                                    width: 600,
                                    padding: "0em",
                                    color: "#fffff",
                                    html: `
                                    <div class="DDD">
                                    <figure><img src="${res.sprites.front_default}" /></figure>
                                    <li>Id: ${res.id}</li>
                                    <li>Name: ${res.name}</li>
                                    <li>Base Experience: ${res.base_experience}</li>
                                    <li>Abilities: ${res.abilities[0].ability.name} </li>
                                    <li>Type(s): ${res.types[0].type.name}</li>
                                    <li>weight: ${res.weight}</li><br><br>
                                    <p class="DDDd"><b>Stats:</b><p>
                                    <ol>
                                        <li>------Hp: ${res.stats[0].base_stat}</li>
                                        <li>------Attack: ${res.stats[1].base_stat}</li>
                                        <li>------Defense: ${res.stats[2].base_stat}</li>
                                        <li>------Special-Attack: ${res.stats[3].base_stat}</li>
                                        <li>------Special-Defense: ${res.stats[4].base_stat}</li>
                                        <li>------Speed: ${res.stats[5].base_stat}</li>
                                    </ol>
                                </div>
                                `
                                });
                            }
                        }
                        })   
                    
                    pokeBox.appendChild(fragment);
                   
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        }
         // ObtenerPOkes();
        }
  inputSeek.value='';
}