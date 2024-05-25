export interface listPokemons {
count:number,
next:string | null,
previous: string | null,
results: {
    name:string;
    url:string;
}[]
}

export interface PokemonDetails {
    abilities: [1, 2, 3?, 4?, 5?];
    base_experience:number;
    height: number;
    id:     number;
    name:   string;
    sprites:{ 
        back_default:string;
        back_female:string;
        back_shiny:string;
        back_shiny_female:string;
        front_default:string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    };
    stats:number;
    types: number;
    weight: number;
}

