const API_URL = "https://api.genshin.dev"
const API_CHARACTERS_URL = API_URL + "/characters"
function getAllCharacters() {
    fetch(API_CHARACTERS_URL)
    .then((response) => response.json()
    .then((data)=> {
        console.log({data});
        const select = document.getElementById("characters");
        for (const character of data) {
            var option = document.createElement("option");
            option.text = character;
            option.value = character;
            select.add(option);
        }
    }))
}
function getCharacterInfo(character) {
    fetch(`${API_CHARACTERS_URL}/${character}`)
    .then((response) => response.json())
    .then((data) => {
        console.log({data});
        document.getElementById("character-image").src = `${API_CHARACTERS_URL}/${character}/icon`;
        document.getElementById("nation").style.backgroundImage = `url("./${data.nation}.jpg")`
        const textToSet = ['name', 'rarity', 'vision', 'weapon', 'description'];
        for (const property of textToSet) {
            const text = document.getElementById(property);
            text.textContent = data[property];
        }
    })
}

getAllCharacters();