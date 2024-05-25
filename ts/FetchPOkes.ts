async function fetchPOkes(): Promise<any> {
    try {
        let url:string= `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;
        const response = await fetch(url);
        return response;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

// Exporta la función por defecto
export default fetchPOkes;



// Llama a la función para hacer la petición
//  export default fetchPOkes();