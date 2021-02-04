function getAllCharacters() {
    fetch("https://api.genshin.dev/characters")
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
    fetch("https://api.genshin.dev/characters/" + character)
    .then((response) => response.json())
    .then((data) => {
        console.log({data});
        document.getElementById("character-image").src = "https://api.genshin.dev/characters/" + character + "/icon";
        const thingsToSet = ['name', 'rarity', 'vision', 'weapon', 'description'];
        for (const property of thingsToSet) {
            const text = document.getElementById(property);
            text.textContent = data[property];
        }
    })
}

getAllCharacters();