let initialColIndex = 0; 
function changeColor(){
    let colors = ["red","green","blue","yellow","black","firebrick"];
    let colorIndex = parseInt(Math.random() * colors.length);
    if(initialColIndex === colorIndex){
        colorIndex = Math.abs(colorIndex-1);
    } 
    document.body.style.backgroundColor = colors[colorIndex];
    initialColIndex = colorIndex;    
}