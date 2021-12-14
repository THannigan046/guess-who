console.log('Here are all the available people:', people);
$(document).ready(onReady);


function onReady(){
    console.log('JQ');
    appendImage()
    guessWho()
}

$(document).on('click', 'button', onGuess)

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}


function onGuess() {
    if($(this).data('name') === personToClick) {
        alert(`Correct`);

        guessWho()
    }
    else alert(`wrong! guess again!`)
}
function guessWho(){
    let r = randomNumber(0, 6);
    let correctPerson = 
    $('h1').append(`Who is ${people[r].name} ?`)


}

function appendImage() {
    $('.container').append(`

    <button data-number=0 id = "dev"><img src = "https://github.com/${people[0]
    .githubUsername}.png?size=250"></img></button>

    <button data-number=1 id = "dane"><img src = "https://github.com/${people[1]
    .githubUsername}.png?size=250"></img></button>

    <button data-number=2 id = "matt"><img src = "https://github.com/${people[2]
    .githubUsername}.png?size=250"></img></button>

    <button data-number=3 id = "kris"><img src = "https://github.com/${people[3]
    .githubUsername}.png?size=250"></img></button>

    <button data-number=4 id = "edan"><img src = "https://github.com/${people[4]
    .githubUsername}.png?size=250"></img></button>

    <button data-number=5 id = "liz"><img src = "https://github.com/${people[5]
    .githubUsername}.png?size=250"></img></button>

    <button data-number=6 id = "chris"><img src = "https://github.com/${people[6]
    .githubUsername}.png?size=250"></img></button>
    `);
}

