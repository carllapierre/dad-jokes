var jokes = require('../../dadjokes.json')

for ( var joke of jokes) {
    console.log('```')
    console.log(joke.hook + '\n');
    console.log(joke.punchline);
    console.log('```')
    console.log('\n');
}