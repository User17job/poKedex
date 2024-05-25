var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function ObtenerPOkes() {
    // funcion para buscar pokemon por id o nombre
    const inputSeek = document.getElementById("input"), $pokeBox = document.getElementById("POkeBox");
    // confirmar el valor del input 
    if (inputSeek.value) {
        const numericValue = parseInt(inputSeek.value, 10);
        // alerta 
        if (!isNaN(numericValue)) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `A pokemon with the Id: ${inputSeek.value}`,
                showConfirmButton: false,
                timer: 1000
            });
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `A pokemon with the Name: ${inputSeek.value}`,
                showConfirmButton: false,
                timer: 1000
            });
        }
        // la peticion
        let parameter = inputSeek === null || inputSeek === void 0 ? void 0 : inputSeek.value.toLocaleLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${parameter}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
            const pokemon = res;
            const $figure = document.createElement("figure"), $img = document.createElement("img"), $figCapt = document.createElement("figcaption"), $pokeName = document.createTextNode(pokemon.name);
            $img.setAttribute("alt", pokemon.name);
            $img.setAttribute("title", pokemon.name);
            $img.setAttribute("src", pokemon.sprites.front_default);
            $figCapt.appendChild($pokeName);
            $figCapt.classList.add("figCapPok");
            $figure.appendChild($img);
            $figure.classList.add("buu");
            $figCapt.onclick = (event) => { check(event); };
            $figure.classList.add("figurePok");
            $figure.appendChild($figCapt);
            $pokeBox.innerHTML = ``;
            $pokeBox.appendChild($figure);
        })
            .catch((Error) => {
            console.log(Error, "Try with the Id or Name of the pokemon");
            let h1 = document.createElement("div");
            h1.textContent = "Try with the Id or Name of the pokemon";
            h1.classList.add("h1h1");
            $pokeBox.innerHTML = ``;
            $pokeBox.appendChild(h1);
        });
        // function para obtener la informacion de un pokemon al selecionarlo
        function check(event) {
            return __awaiter(this, void 0, void 0, function* () {
                const elementoClicado = event.target;
                const textoElemento = elementoClicado.textContent;
                if (textoElemento) {
                    try {
                        const pokeBox = document.getElementById("POkeBox"), fragment = document.createDocumentFragment();
                        const $figure = document.createElement("section"), $img = document.createElement("img"), $figCapt = document.createElement("div");
                        // la peticion al elemento seleccionado    
                        fetch(`https://pokeapi.co/api/v2/pokemon/${textoElemento}`)
                            .then(res => res.json())
                            .then((res) => {
                            $img.setAttribute("src", res.sprites.front_default);
                            $figCapt.classList.add("figCapPokk");
                            $figCapt.setAttribute("onclick", "check()");
                            $figCapt.onclick = (event) => { check(event); };
                            $figCapt.textContent = res.name;
                            $figure.appendChild($img);
                            $figure.classList.remove("buu");
                            $figure.classList.add("figurePokk");
                            fragment.appendChild($figure);
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
                        });
                        pokeBox.appendChild(fragment);
                    }
                    catch (error) {
                        console.error('Error al obtener los datos:', error);
                    }
                }
            });
        }
    }
    // limpiar el input
    inputSeek.value = '';
}
