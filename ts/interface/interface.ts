export interface listPokemons {
count:number,
next:string | null,
previous: string | null,

results: {
    name:string,
    url:string
}[]
}

export interface PokemonDetails {
    id:number,
    name:string,
    sprites: {
        front_default:string,
        back_default:string,
        front_shiny:string
        back_shiny:string
    }
}