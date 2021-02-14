const randomJokes = 'http://api.icndb.com/jokes/random';

async function getJokes(url) {
  response = await fetch(url);
  console.log(response);
  result = await response.json();

  const jokeRND = result.value.joke;
  console.log(jokeRND);
}

getJokes(randomJokes);
