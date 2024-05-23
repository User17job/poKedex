export default function fetchPOkes() {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=40&limit=20`, $pokeBox = document.getElementById("POkeBox"), fragment = document.createDocumentFragment();
    fetch(url)
        .then(res => res.json())
        .then((res) => {
        res.results.forEach((pokemon) => {
            // res.next
            const $figure = document.createElement("figure"), $img = document.createElement("img"), $figCapt = document.createElement("figcaption"), $pokeName = document.createTextNode(pokemon.name);
            fetch(pokemon.url)
                .then(res => res.json())
                .then((res) => {
                $img.setAttribute("src", res.sprites.front_default);
            });
            $img.setAttribute("alt", pokemon.name);
            $img.setAttribute("title", pokemon.name);
            $figCapt.appendChild($pokeName);
            $figure.appendChild($img);
            $figure.appendChild($figCapt);
            fragment.appendChild($figure);
        });
        console.log(res);
        $pokeBox.appendChild(fragment);
    });
}
