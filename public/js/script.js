var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchPOkes from "./FetchPOkes.js";
import ObtenerPOkes from "./ObtenerPokemons.js";
// todos los pokemons
function miFuncionPrincipal() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetchPOkes();
            const pokeBox = document.getElementById("POkeBox"), fragment = document.createDocumentFragment();
            const response = yield fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            const data = yield response.json();
            data.results.forEach((pokemon) => {
                const $figure = document.createElement("figure"), $img = document.createElement("img"), $figCapt = document.createElement("figcaption"), $pokeName = document.createTextNode(pokemon.name);
                fetch(pokemon.url)
                    .then(res => res.json())
                    .then((res) => {
                    $img.setAttribute("src", res.sprites.front_default);
                });
                $img.setAttribute("alt", pokemon.name);
                $img.setAttribute("title", pokemon.name);
                $figCapt.appendChild($pokeName);
                $figCapt.classList.add("figCapPok");
                $figCapt.setAttribute("onclick", "check()");
                $figCapt.onclick = (event) => { check(event); };
                $figure.appendChild($img);
                $figure.classList.remove("buu");
                $figure.classList.add("figurePok");
                $figure.appendChild($figCapt);
                fragment.appendChild($figure);
            });
            pokeBox.appendChild(fragment);
        }
        catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        ;
        // MANEJAR LAS OPTIONS 
        let options = [
            'Type Pokemon',
            'Normal',
            'Fighting',
            'Flying',
            'Poison',
            'Ground',
            'Rock',
            'Bug',
            'Ghost',
            'Steel',
            'Fire',
            'Water',
            'Grass',
            'Electric',
            'Psychic',
            'Ice',
            'Dragon',
            'Dark'
        ];
        function aVer() {
            let valu = 1;
            const selectTick = document.querySelector('#type-pokemon'), fragment = document.createDocumentFragment();
            for (let i = 1; i < options.length; i++) {
                const option = document.createElement("option");
                option.value = `https://pokeapi.co/api/v2/type/${valu}/`;
                option.classList.add('filter-pokemon');
                option.textContent = options[i];
                fragment.appendChild(option);
                valu++;
            }
            selectTick.appendChild(fragment);
        }
        ;
        aVer();
    });
}
;
miFuncionPrincipal();
// detalles del pokemon
function check(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const elementoClicado = event.target;
        const textoElemento = elementoClicado.textContent;
        console.log('Texto del elemento clicado:', textoElemento);
        if (textoElemento) {
            try {
                const pokeBox = document.getElementById("POkeBox"), fragment = document.createDocumentFragment();
                const $figure = document.createElement("section"), $img = document.createElement("img"), $figCapt = document.createElement("div");
                fetch(`https://pokeapi.co/api/v2/pokemon/${textoElemento}`)
                    .then(res => res.json())
                    .then((res) => {
                    let miPokemon = res;
                    $img.setAttribute("src", res.sprites.front_default);
                    $figCapt.classList.add("figCapPokk");
                    $figCapt.setAttribute("onclick", "check()");
                    $figCapt.onclick = (event) => { check(event); };
                    $figCapt.textContent = res.name;
                    $figure.appendChild($img);
                    $figure.classList.remove("buu");
                    $figure.classList.add("figurePokk");
                    fragment.appendChild($figure);
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
                });
                pokeBox.appendChild(fragment);
            }
            catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        }
    });
}
//obtener pokemon distinguido por nombre o id
const seek = document.getElementById("search");
seek === null || seek === void 0 ? void 0 : seek.addEventListener("click", OBtenerPOks);
function OBtenerPOks(event) {
    event.preventDefault();
    ObtenerPOkes();
}
;
// los botones de cambio
const botonNext = document.querySelector("#btnFront");
const botonBefore = document.querySelector("#btnBack");
let parameter = 0;
// Next
botonNext.addEventListener("click", NexTing);
function NexTing() {
    getNext();
    function getNext() {
        return __awaiter(this, void 0, void 0, function* () {
            if (parameter < 1302) {
                botonBefore.style.backgroundColor = `#ffffff`;
                botonNext.style.backgroundColor = `#ffffff`;
                parameter = parameter + 20;
                try {
                    const pokeBox = document.getElementById("POkeBox"), fragment = document.createDocumentFragment();
                    const response = yield fetch(`https://pokeapi.co/api/v2/pokemon?offset=${parameter}&limit=20`);
                    if (!response.ok) {
                        throw new Error('Error en la petición');
                    }
                    const data = yield response.json();
                    data.results.forEach((pokemon) => {
                        const $figure = document.createElement("figure"), $img = document.createElement("img"), $figCapt = document.createElement("figcaption"), $pokeName = document.createTextNode(pokemon.name);
                        pokeBox.innerHTML = ``;
                        fetch(pokemon.url)
                            .then(res => res.json())
                            .then((res) => {
                            $img.setAttribute("src", res.sprites.front_default);
                        });
                        $img.setAttribute("alt", pokemon.name);
                        $img.setAttribute("title", pokemon.name);
                        $figCapt.appendChild($pokeName);
                        $figCapt.classList.add("figCapPok");
                        $figCapt.setAttribute("onclick", "check()");
                        $figCapt.onclick = (event) => { check(event); };
                        $figure.appendChild($img);
                        $figure.classList.remove("buu");
                        $figure.classList.add("figurePok");
                        $figure.appendChild($figCapt);
                        fragment.appendChild($figure);
                    });
                    pokeBox.appendChild(fragment);
                }
                catch (error) {
                    console.error('Error al obtener los datos:', error);
                }
            }
            else {
                botonNext.style.backgroundColor = `#a2a2a2ac`;
            }
        });
    }
}
// Back
botonBefore.addEventListener("click", BackxTing);
function BackxTing() {
    getBefore();
    function getBefore() {
        return __awaiter(this, void 0, void 0, function* () {
            if (parameter > 0) {
                botonBefore.style.backgroundColor = `#ffffff`;
                botonNext.style.backgroundColor = `#ffffff`;
                parameter = parameter - 20;
                try {
                    const pokeBox = document.getElementById("POkeBox"), fragment = document.createDocumentFragment();
                    const response = yield fetch(`https://pokeapi.co/api/v2/pokemon?offset=${parameter}&limit=20`);
                    if (!response.ok) {
                        throw new Error('Error en la petición');
                    }
                    const data = yield response.json();
                    data.results.forEach((pokemon) => {
                        const $figure = document.createElement("figure"), $img = document.createElement("img"), $figCapt = document.createElement("figcaption"), $pokeName = document.createTextNode(pokemon.name);
                        pokeBox.innerHTML = ``;
                        fetch(pokemon.url)
                            .then(res => res.json())
                            .then((res) => {
                            $img.setAttribute("src", res.sprites.front_default);
                        });
                        $img.setAttribute("alt", pokemon.name);
                        $img.setAttribute("title", pokemon.name);
                        $figCapt.appendChild($pokeName);
                        $figCapt.classList.add("figCapPok");
                        $figCapt.setAttribute("onclick", "check()");
                        $figCapt.onclick = (event) => { check(event); };
                        $figure.appendChild($img);
                        $figure.classList.remove("buu");
                        $figure.classList.add("figurePok");
                        $figure.appendChild($figCapt);
                        fragment.appendChild($figure);
                    });
                    pokeBox.appendChild(fragment);
                }
                catch (error) {
                    console.error('Error al obtener los datos:', error);
                }
            }
            else {
                botonBefore.style.backgroundColor = `#a2a2a2ac`;
            }
        });
    }
}
