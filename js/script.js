const randomJokes = 'http://api.icndb.com/jokes/random';
const jokeBtn = document.querySelector('#generateJoke');
jokeBtn.onclick = function () {
  async function getJokes(url) {
    try {
      response = await fetch(url);
      result = await response.json();
      const jokeRND = result.value.joke;

      let jokeDivClear = '';
      document.querySelector('.jokes').innerHTML = `
      <p>${jokeRND}</p>
      `;
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  getJokes(randomJokes);
};
