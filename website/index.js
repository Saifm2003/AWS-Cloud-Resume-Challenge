// JavaScript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://6fzxt6mal6f3afapshaqvjky4y0pluvt.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();