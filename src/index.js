window.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');

  let background = new Image();
  background.src = "https://thediscerningcat.com/wp-content/uploads/2021/09/british-short-hair-chincilla-up-close.jpg";

  background.onload = function(){
    ctx.drawImage(background,0,0,700,500);   
  }
  // ctx.fillStyle = "blue";
  // ctx.fillRect(0, 0, canvas.width, canvas.height); 
});