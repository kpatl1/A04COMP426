document.addEventListener('DOMContentLoaded', function() {
    fetchRandomImage();
    fetchRandomJoke();
});

function fetchRandomImage() {
    const imageUrl = `https://picsum.photos/200/300`;
    document.getElementById('random-image').src = imageUrl;
}

function fetchRandomJoke() {
    const jokeUrl = 'https://icanhazdadjoke.com/';
    fetch(jokeUrl, {
        headers: {
            'Accept': 'text/plain'
        }
    })
    .then(response => response.text())
    .then(joke => {
        document.getElementById('joke-text').textContent = joke;
    })
    .catch(error => console.error('Error fetching joke:', error));
}