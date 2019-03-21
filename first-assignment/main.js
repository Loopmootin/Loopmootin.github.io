
/* RANDOM PLACE BRICKS */
let placeRandom = document.querySelectorAll(".brick img");

placeRandom.forEach(element => {
    let randomNumberY = Math.floor((Math.random() * 400) + 1);
    let randomNumberX = Math.floor((Math.random() * 10) + 1);
    let randomNumberZ = Math.floor((Math.random() * 10) + 1);

    element.style.top = 0;
    element.style.left = -30 + "%";

    element.style.zIndex = randomNumberZ;

    element.style.transform = "translate(" + randomNumberX + "%," + randomNumberY + "%)";
});


/* CHANGE BACKGROUND IMAGE */
let changePuzzleCat = document.getElementById("cat-puzzle");
let changePuzzleWin = document.getElementById("win-puzzle");
let changeBackground = document.querySelectorAll(".brick img");

changePuzzleCat.addEventListener('click', function () {
    let background = document.getElementById("background");
    
    changeBackground.forEach(element => {
        let newSrc = element.src.replace("win", "kitty");
        element.src = newSrc;
    });

    let newBg = background.src.replace("win", "kitty");
    background.src = newBg;
}, true);

changePuzzleWin.addEventListener('click', function () {
    let background = document.getElementById("background");

    changeBackground.forEach(element => {
        let newSrc = element.src.replace("kitty", "win");
        element.src = newSrc;
    });

    let newBg = background.src.replace("kitty", "win");
    background.src = newBg;
}, true);


/* HELP BUTTON */
let helpButton = document.getElementById("help-button");
let background = document.getElementById("background");

helpButton.addEventListener('mousedown', function () {

    background.style.display = "block";
}, true);

helpButton.addEventListener('mouseup', function () {

    background.style.display = "none";
}, true);


/* MOVE BRICKS */
let move = document.querySelectorAll(".brick img");

move.forEach(element => {

    // MOVE A BRICK
    if (element) {

        let mousePosition;
        let offset = [0, 0];
        let isDown = false;

        element.addEventListener('mousedown', function (e) {

            isDown = true;
            offset = [
                element.offsetLeft - e.clientX,
                element.offsetTop - e.clientY
            ];

        }, true);

        document.addEventListener('mouseup', function () {

            isDown = false;
        }, true);

        document.addEventListener('mousemove', function (event) {

            event.preventDefault();
            if (isDown) {

                mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };

                element.style.left = (mousePosition.x + offset[0]) + 'px';
                element.style.top = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);
    }
});