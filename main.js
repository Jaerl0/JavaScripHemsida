

window.addEventListener("load", () => {
    const drawingArea = document.querySelector("#drawingArea");
    const ctx = drawingArea.getContext("2d");

    drawingArea.height = window.innerWidth/1.5;
    drawingArea.width = window.innerWidth;

   let painting = false;
   let strokeSize = 8;

// Change strokecolor
   function changeStrokeColor (){
       var color = document.getElementById("colorSelect").value;
       ctx.strokeStyle = color;
   }
   document.getElementById("apply").addEventListener("click", changeStrokeColor, false);

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
       ctx.lineWidth = strokeSize;
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