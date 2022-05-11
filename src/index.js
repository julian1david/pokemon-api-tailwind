

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

/* const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price)

    return newPrice
} */


const appNode = document.querySelector('#app')

async function pokemonData() {
    try {
        const { data } = await axios(`${baseURL}`);
        const pokemons = data.results;
        pokemons.map( pokemon => {
            urlPokemons(pokemon.url);
        })
        /* listAvocados(avocados) */
        //Un array vacios para almacenar los avocados
        /*  listAvocados(data) */
    } catch (error) {
        console.log(error);
    }
}

async function urlPokemons(pokemons){
    try {
        
        const { data } = await axios(pokemons);
        printPokemons(data);
    }
    catch (error){
        console.log(error);
    }
}

const printPokemons = (poke) => {
    const allItems = [];
    //Recorremos el 
    const title = document.createElement('h2');
    title.textContent = poke.name.toUpperCase();
    title.className = "text-lg";
    
    const image = document.createElement('img');
    image.src = poke.sprites.other.dream_world.front_default;
    image.className = "h-16 w-16 md:h-24 md:w-24 mx-auto md:mx-0 md:mr-6 object-contain";

    const ability = document.createElement('div');
    ability.textContent = poke.abilities[0].ability.name;
    ability.className = "text-gray-600"
    /* const price = document.createElement('div');
    price.className = "text-gra-600";  */
    //API para formatear el precio del texto.
    /* price.textContent = formatPrice(avocado.price) */

    //Wrap price & title
    const nameAndAbility = document.createElement('div')
    nameAndAbility.className = 'text-center md:text-left'
    nameAndAbility.append(title, ability);

    const card = document.createElement('div');
    card.className = "md:flex bg-white justify-center rounded-lg p-6 hover:bg-gray-300 border ";
    card.append(image,nameAndAbility);
    allItems.push(card);
    
    //Integramos al body los avocados
    appNode.append(...allItems);
    appNode.className = 'mt-10 grid md:grid-cols-2 gap-4'; 
}

const geratePokemon = document.getElementById("generate-pokemon");
geratePokemon.addEventListener('click', () => {
    appNode.innerHTML = " ";
    pokemonData()
});
document.addEventListener('DOMContentLoaded',pokemonData);
