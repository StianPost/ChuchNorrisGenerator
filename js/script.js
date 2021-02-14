const randomJokes = 'http://api.icndb.com/jokes/random';
const jokeBtn = document.querySelector('#generateJoke');

jokeBtn.onclick = function () {
  async function getJokes(url) {
    try {
      response = await fetch(url);
      result = await response.json();
      const jokeRND = result.value.joke;

      document.querySelector('.jokes').style.display = 'block';
      document.querySelector('.jokes').innerHTML = `
      <p>${jokeRND}</p>
      `;
    } catch (error) {
      console.log(error);
      document.querySelector('.alert').innerHTML = showAlertTouser(
        `Couldn't find joke`,
        'danger'
      );
    } finally {
      setTimeout(function () {
        document.querySelector('.alert').innerHTML = '';
      }, 3000);
    }
  }
  getJokes(randomJokes);
};
