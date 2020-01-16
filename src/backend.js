'use strict';

const config = {
    countdown: 0,
    delay: 1000,
    session: 25,
    rest: 5,
    sessionSeconds: this.session * 60,
    restSecond: this.rest * 60,
    audioSession: new Audio('./mp3/som.mp3'),
    audioBreak: new Audio('./mp3/som.mp3'),
};

function main() {
    document.getElementById('sessionMinutes').innerHTML = ' ' + session + ' ';
    document.getElementById('breakMinutes').innerHTML = ' ' + rest + ' ';
    document.getElementById('timer').innerHTML = session + ':00';
}