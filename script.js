// function Player(name) {
//     let player = [];
//     this.name = name;
// }

// // function trackPlayer() {
// //     let turn = [];
// //     let board = document.querySelector(".toprow > child, .middlerow > child, .bottomrow > child");;
// // }

// // function move() {
// //     const 
// // }

// const board = document.querySelectorAll(".toprow > child, .middlerow > child, .bottomrow > child");
// board.addEventListener('click', () => {
//     console.log("hello");
// });




// function makeAMove() {
//     const topRight = document.querySelector(".topright");
//     topRight.addEventListener('click', () => {
//         const exes = document.createElement("div");
//         exes.textContent = "X";
//         topRight.appendChild(exes);
//     });
// }
// makeAMove();

// const playerFactory = (name, shape) => {

// }

let trackPlayer = [1];

function lastIndex() {
    let length = trackPlayer.length;
    let index = length - 1;
    return index
}

const gameBoard = () => {
    const container = document.querySelector(".container");
    let i = 0;
    let j = 0;
    while (i < 9) {
        let square = document.createElement('div');
        square.className = `square material-symbols-outlined ${j}`

        square.onclick = () => {
            if (trackPlayer[lastIndex()] == 1) {
                square.innerText = "close";
                trackPlayer.push(2);
                
            }
            else if (trackPlayer[lastIndex()] == 2) {
                square.innerText = "circle";
                trackPlayer.push(1);

            };

            checkWin();
        };

        container.appendChild(square);

        i ++;
        j++;
    };

};

gameBoard();

const checkWin = () => {
    let square = document.querySelectorAll('.square');
    let i = 0;
    if (square[0].innerText != "") {
        if (square[0].innerText === square[1].innerText && square[1].innerText === square[2].innerText) {
            console.log("Good Job")
        }
        if (square[0].innerText === square[4].innerText && square[4].innerText === square[8].innerText) {
            console.log("Good Job")
        }
        if (square[0].innerText === square[3].innerText && square[3].innerText === square[6].innerText) {
            console.log("Good Job")
        }
    }
    if (square[1].innerText != "") {
        if (square[1].innerText === square[4].innerText && square[4].innerText === square[7].innerText) {
            console.log("Good Job")
        }
    }
    if (square[2].innerText != "") {
        if (square[2].innerText === square[5].innerText && square[5].innerText === square[8].innerText) {
            console.log("Good Job")
        }
        if (square[2].innerText === square[4].innerText && square[4].innerText === square[6].innerText) {
            console.log("Good Job")
        }
    }
    if (square[3].innerText != "") {
        if (square[3].innerText === square[4].innerText && square[4].innerText === square[5].innerText) {
            console.log("Good Job")
        }
    }
    if (square[6].innerText != "") {
        if (square[6].innerText === square[7].innerText && square[7].innerText === square[8].innerText) {
            console.log("Good Job")
        }
    }
}

console.log(lastIndex());
console.log(trackPlayer)