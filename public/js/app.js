const form = document.querySelector('form');
const code = document.querySelector('#code');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const inputRadio = document.querySelector('#inputRadio');
const lang = document.querySelector('#lang');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    output.textContent = "Loading";
    const language = lang.value;
    const cinput = inputRadio.value;
    const custom = input.value;
    const codec = code.value;
    console.log(code.value);
    accessInBrowser('/compilecode?lang=' + language + "&cin=" + cinput + "&cinput=" + custom + "&code=" + codec).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                output.textContent = "Error:" + data.error
            } else {
                output.textContent = data.result
            }
        })
    })
})