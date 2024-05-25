var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchPOkes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;
            const response = yield fetch(url);
            return response;
        }
        catch (error) {
            console.error('Error al obtener los datos:', error);
            throw error;
        }
    });
}
// Exporta la función por defecto
export default fetchPOkes;
// Llama a la función para hacer la petición
//  export default fetchPOkes();
