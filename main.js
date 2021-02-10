

window.addEventListener("load", () => {
    const drawingArea = document.querySelector("#drawingArea");
    const ctx = drawingArea.getContext("2d");

    drawingArea.height = 800;
    drawingArea.width = window.innerWidth;

   let painting = false;

// Change strokecolor
   function changeStrokeColor (){
       var color = document.getElementById("colorSelect").value;
       ctx.strokeStyle = color;
   }
   document.getElementById("apply").addEventListener("click", changeStrokeColor, false);

// Change strokesize
   function changeStrokeSize (){
       var StrokeSize = document.getElementById("size").value;
       ctx.lineWidth = StrokeSize;
   }
   document.getElementById("apply").addEventListener("click", changeStrokeSize, false);

// Clear canvas 
document.getElementById("clear").addEventListener("click", function() {
    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height); }, false);

// Eraser 

    function eraser (){
        var eraser = document.getElementById("eraser").value;
        if (eraser == true){
        ctx.strokeStyle = "white";
        }
    }
    document.getElementById("eraser").addEventListener("click", eraser, false);


   function startPosition(e){
       painting = true;
       draw(e);
   }
   function finishedPosition() {
       painting = false;
       ctx.beginPath();
   }
   function draw(e){
       if(!painting) return;
       ctx.lineCap = "round";

       ctx.lineTo(e.clientX, e.clientY-100);
       ctx.stroke();
       ctx.beginPath();
       ctx.moveTo(e.clientX, e.clientY-100);
   }

   drawingArea.addEventListener("mousedown", startPosition);
   drawingArea.addEventListener("mouseup", finishedPosition);
   drawingArea.addEventListener("mousemove", draw);
});