var canvas = document.getElementById('canvas');
var textInput = document.getElementById('textInput');
var submitButton = document.getElementById('submitButton');

var text = '';

canvas.width = 500;
canvas.height = 500;

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  var background = new Image();
  background.src = "https://i.pinimg.com/originals/1b/70/61/1b7061e57ff4edde0b2d1628e508b6c4.jpg";
  background.onload = function(){
    submitButton.onclick = function() {
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height); // Draw Background Image
      // Text Styles
      ctx.font = '24px Impact';
      ctx.fillStyle = 'White';
      ctx.strokeStyle = 'Black';
      text = textInput.value;
      var textWidth = ctx.measureText(text).width;
      // Draw Text
      ctx.fillText(text, (canvas.width/2) - (textWidth/2), canvas.height/2); // Solid Text
      ctx.strokeText(text, (canvas.width/2) - (textWidth/2), canvas.height/2); // Give Solid Text a Stroke Style
    }
  }
}
