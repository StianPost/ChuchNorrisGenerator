const randomJokes = 'http://api.icndb.com/jokes/random';
const jokeBtn = document.querySelector('#generateJoke');

async function getJokes(url) {
  response = await fetch(url);
  console.log(response);
  result = await response.json();

  const jokeRND = result.value.joke;
  console.log(jokeRND);
  jokeBtn.onclick = function () {
    document.querySelector('.jokes').innerHTML = `
    <p>${jokeRND}</p>
    `;
  };
}

getJokes(randomJokes);
