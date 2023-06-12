function showObject() {
    const input = document.querySelector("#number");
    const num = input.value;

    if (num >= 0 && num <= 402) {
        const url = 'https://hp-api.onrender.com/api/characters';

    fetch(url)
    .then(r => r.json())
    .then(t => console.log(t[num]));
    }
}
