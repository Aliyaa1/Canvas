//   let canvas = document.querySelector("#canvas");
// //   permet de regler le ratio canvas 
// // déclaaration de variable
//   canvas.height = canvas.offsetHeight;
//   canvas.width = canvas.offsetWidth;

// // optimisation pr cette hauteur de canva (dimension brique)

//     let brickRowCount = 3;
//     let brickColumnCount = 5;
//     let brickWidth = 75;
//     let brickHeight = 20;
//     let brickPadding = 10;
//     let brickOffsetTop = 30;
//     let brickOffsetLeft = 30;

//     let bricks = [];
// //  c = column index c = 0.1.2.3.4 et r = row 
// for (let c=0; c < brickColumnCount; c++ ){
//     bricks [c]= [];
//     for (let r= 0; r< brickRowCount; r++){
//         bricks[c][r] = {x:0, y:0};
//     }
// }



// function drawBrick() {
//     for (let c = 0; c < brickColumnCount; c++ ){
//     for (let r= 0; r< brickRowCount; r++){
//         if (bricks[c][r].status === 1){

        
//     let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//     let brickY = r * (brickHeight+ brickPadding) + brickOffsetTop;

//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         ctx.beginPath();
//         ctx.rect(brickX, brickY,brickWidth, brickHeight);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//    } }
//     }
// }

//     let paddleHeight = 10;
//     let paddleWidth = 70;
//     let paddleX = (canvas.width - paddleWidth)/2

//     let x = canvas.width /2;
//     let y = canvas.height -30;
//     let dx= 2;
//     let dy= -2;
//     //rayon pr calcul
//     let ballRadius =  10;

//     let rightPressed = false;
//     let leftPressed = false;

//     let ctx = canvas.getContext("2d");
// //callback de la fonct°
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);


// function keyDownHandler(e) {
//     if(e.key === "ArrowRight"|| e.key === "Right" ){
//         rightPressed = true;
//     } else if (e.key === "ArrowLeft" || e.key === "Left") {
//         leftPressed = true;
//     }
// }
// function collisionDetection(){
//     for(let c = 0; c < brickColumnCount; c++) {
//         for (let r = 0; r < brickRowCount; r++){
//             let b = bricks[c][r];
//             if (b.status ===1){

//             if (x > b.x && 
//                 x < b.x + brickWidth && 
//                 y > b.y &&
//                  y < b.y + brickHeight
//                  ){
//                 dy = -dy; 
//                 b.status = 0;
//                 } 
//             }
//         }
//     }
// }
// // relever si touche relacher avce UP, false afin de preciser que la touche n'est plus pressée 
// function keyUpHandler(e) {
//     if(e.key === "ArrowRight" || e.key === "Right" ){
//         rightPressed = false;
//     } else if (e.key === "ArrowLeft" || e.key === "Left") {
//         leftPressed = false;
//     }
// }


// function drawPaddle(){
//     ctx.beginPath();
//         ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
//         ctx.fillStyle= "#0095DD";
//         ctx.fill();
//         ctx.closePath();
// }

// function drawBall() {
//     ctx.beginPath(); // c'est ce qu'on appl les frames (gaming = fps)
//         ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//         ctx.fillStyle= "#0095DD";
//         ctx.fill();
//         ctx.closePath();
// }
// // separation des 2 fonction l'une qui dessine l'autre clear

// function draw() {
//     // votre codeon recupere tout ici
//     // 
//     //recuperation du contexte
//     if (canvas.getContext){
//         ctx.clearRect(0,0,canvas.width, canvas.height)
//         drawBall(); // c'est ce qu'on appl le callBACK
//         drawPaddle();
//         collisionDetection();
//         drawBrick();
//         //     || =ou 

//         //rebond haut
//         if (y + dy < ballRadius ){
//             dy = -dy; // inversion du sens
//         } else if (y + dy > canvas.height - ballRadius) {
//             if (x > paddleX && x < paddleX + paddleWidth) {
//                 dy = -dy;
//             } else {
           
//             alert ("game over! ");
//             // permet de reload la page directement
//             document.location.reload();
//             // nettoie interval en bas, beug a cause de chrome
//             clearInterval(interval);
//          }
//         }
//         //rebond G/D
//         if (x + dx < ballRadius || x + dx > canvas.width - ballRadius){
//             dx = -dx; 
//         }
//     if (rightPressed) {
//         paddleX += 7;
//         if(paddleX + paddleWidth > canvas.width) {
//             paddleX = canvas.width - paddleWidth;
//         }
//     } else if (leftPressed){
//         paddleX -=7;
//         if(paddleX < 0) {
//             paddleX = 0;
//         }
//     }    
//         //rebond bas
//         x += dx; // x =x +dx
//         y += dy;   
//          // console.log(x);
//     }
// };

// let interval = setInterval(draw, 20); // va lancer le code toutes les ... milisecondes
