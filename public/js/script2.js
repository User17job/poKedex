"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let url;
function checkType() {
    const select = document.querySelector("#type-pokemon");
    let option = select.value;
    url = option;
    fetchPokeTypes();
}
;
function fetchPokeTypes() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(url);
        try {
            const pokeBox = document.getElementById("POkeBox"), fragment = document.createDocumentFragment();
            pokeBox.innerHTML = ``;
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            const Data = yield response.json();
            let data = Data.pokemon;
            // console.log('Datos:', Data.pokemon[1].pokemon)
            console.log('Datos recibidos:', data);
            let miurl;
            for (let i = 5; i <= 80; i++) {
                let index = i;
                const $figure = document.createElement("figure"), $img = document.createElement("img"), $figCapt = document.createElement("figcaption"), $pokeName = document.createTextNode(data[index].pokemon.name);
                let name = $pokeName.textContent;
                fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
                    .then(res => res.json())
                    .then((res) => {
                    $img.setAttribute("src", res.sprites.front_default);
                });
                $img.setAttribute("alt", data[index].pokemon.name);
                $img.setAttribute("title", data[index].pokemon.name);
                $figCapt.appendChild($pokeName);
                $figCapt.classList.add("figCapPok");
                $figCapt.setAttribute("onclick", "check()");
                $figCapt.onclick = (event) => { check(event); };
                $figure.appendChild($img);
                $figure.classList.remove("buu");
                $figure.classList.add("figurePok");
                $figure.appendChild($figCapt);
                fragment.appendChild($figure);
            }
            pokeBox.appendChild(fragment);
        }
        catch (error) {
            console.error(error);
        }
    });
}
;
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
                    $img.setAttribute("src", res.sprites.front_default);
                    $figCapt.classList.add("figCapPokk");
                    $figCapt.setAttribute("onclick", "check()");
                    $figCapt.onclick = (event) => { check(event); };
                    $figCapt.textContent = res.name;
                    $figure.appendChild($img);
                    $figure.classList.remove("buu");
                    $figure.classList.add("figurePokk");
                    fragment.appendChild($figure);
                    console.log(res);
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
                     <figure><img src="${res.sprites.front_default}" /></figure>
                     <div class="DDD">
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
;
