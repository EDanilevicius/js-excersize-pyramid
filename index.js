const buttons = document.getElementById("buttons");
// const output = document.getElementById("draw");

// const render = stars =>{
//     draw.innerHTML = stars;
// }

function buildTriangle(num){
    let stars=""
    for(let row=0; row<num; row++){
        for(let star=0; star<row; star++){
            stars+="*"
        }
        stars+="<br />";
    }
    return stars;
}

function buildPyramid(num){
    let stars=""
    for(let row=0; row<num; row++){
        //tarpai
        for(let space=0; space<num-row; space++){
            stars+="&nbsp;";
        }
        //zvaigzdute
        for(let star=0; star<row *2+1; star++){
            stars+="*"
        }
        stars+="<br />";

    }
    return stars;
}

function buildReversePyramid(num){
    let stars=""
    for(let row=0; row<num; row++){
        //tarpai
        for(let star=0; star<row; star++){
            stars+="&nbsp;";
        }
        //zvaigzdute
        for(let space=0; space<num-row; space++){
            stars+="* ";
        }
        stars+="<br />";

    }
    return stars;
}

const clearOutput = () =>{
    document.getElementById("draw").innerHTML ="";
};

buttons.addEventListener('click', event=>{
    //make action only when pressed on buttons, not somewhere else
    if (event.target.tagName==="BUTTON"){
    const actionName=event.target.name;

    switch (actionName){

        case 'triangle':
            document.getElementById("draw").innerHTML = buildTriangle(10); 
        break;
            
        case 'pyramid':
            document.getElementById("draw").innerHTML = buildPyramid(10);
        break;
        
        case 'reverse_pyramid':
            document.getElementById("draw").innerHTML = buildReversePyramid(10);
        break;

        case 'clear':
            clearOutput();
        break;
            
        default:
            clearOutput();
    }
}

});