var jokes = [
    "joke 1 is funny",
    "joke 2 is funnier",
    "joke 3 is funniest",
]


function _getRandomJoke(){

    return jokes[Math.floor(Math.random() * jokes.length)];

}

function _addJoke(joke){

    jokes.push(joke);

}


module.exports = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
}
