const win = parseInt(window.localStorage.getItem('nscore'))
const t1name = window.localStorage.getItem('team1')
const t2name = window.localStorage.getItem('team2')

const score_r = document.querySelector('.score_r')
const score_b = document.querySelector('.score_b')

const t1 = document.querySelector('.t1')
const t2 = document.querySelector('.t2')

t1.innerHTML = t1name
t2.innerHTML = t2name

console.log(score_b)
var pt_r = 0;
var pt_b = 0;
var inc = 1;




console.log(win)

function check() {
    console.log(pt_r)
    console.log(win)

    if (pt_r === win) {
        inc = 0;
        console.log("checking hmm")
        alert("red won")
    }

    if (pt_b === win) {
        inc = 0;
        console.log("checking hmm")
        alert("blue won")
    }
}

function inc_r() {
    pt_r += inc;
    score_r.innerHTML = pt_r;
    check();
}

function inc_b() {
    pt_b += inc;
    score_b.innerHTML = pt_b;
    check();
}

function dec_r() {
    pt_r -= inc;
    score_r.innerHTML = pt_r;
}

function dec_b() {
    pt_b -= inc;
    score_b.innerHTML = pt_b;
}