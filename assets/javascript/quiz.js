// Set up variables

var answers = [];


// Set up functions

// Change choices to dates

// function before1960() {
//     document.getElementById("block1").innerHTML = "Pre-1960";
// };

// function from1960To1989() {
//     document.getElementById("block2").innerHTML = "1960-1989";
// };

// function from1990To2010() {
//     document.getElementById("block3").innerHTML = "1990-2010";
// };

// function from2011To2018() {
//     document.getElementById("block4").innerHTML = "2011-2018";
// };


// Hide choices

// function hideBlock3() {
//     document.getElementById("block3").style.display = "none";
// };

// function hideBlock4() {
//     document.getElementById("block4").style.display = "none";
// };

// function hideBlock5() {
//     document.getElementById("block5").style.display = "none";
// };

// function hideBlock6() {
//     document.getElementById("block6").style.display = "none";
// };

// function hideBlock7() {
//     document.getElementById("block7").style.display = "none";
// };

// function hideBlock8() {
//     document.getElementById("block8").style.display = "none";
// };

// Change questions

function changeToQuestion2() {
    document.getElementById("question").innerHTML = "What movie era do you prefer?";
};

function changeToQuestion3() {
    document.getElementById("question").innerHTML = "What subgenre would you like?"
};

function changeToQuestion4() {
    document.getElementById("question").innerHTML = "Do you want a movie that is critically acclaimed or are you just looking for good entertainment?"
};

// // Change ids

// function comedyIds() {
//     document.getElementById("block1").id = "comedyBlock1";
//     document.getElementById("block2").id = "comedyBlock2";
//     document.getElementById("block3").id = "comedyBlock3";
//     document.getElementById("block4").id = "comedyBlock4";
// };

// function dramaIds() {
//     document.getElementById("block1").id = "dramaBlock1";
//     document.getElementById("block2").id = "dramaBlock2";
//     document.getElementById("block3").id = "dramaBlock3";
//     document.getElementById("block4").id = "dramaBlock4";
// };

// function actionIds() {
//     document.getElementById("block1").id = "actionBlock1";
//     document.getElementById("block2").id = "actionBlock2";
//     document.getElementById("block3").id = "actionBlock3";
//     document.getElementById("block4").id = "actionBlock4";
// };

// function suspenseIds() {
//     document.getElementById("block1").id = "suspenseBlock1";
//     document.getElementById("block2").id = "suspenseBlock2";
//     document.getElementById("block3").id = "suspenseBlock3";
//     document.getElementById("block4").id = "suspenseBlock4";
// };

// function horrorIds() {
//     document.getElementById("block1").id = "horrorBlock1";
//     document.getElementById("block2").id = "horrorBlock2";
//     document.getElementById("block3").id = "horrorBlock3";
//     document.getElementById("block4").id = "horrorBlock4";
// };

// function foreignIds() {
//     document.getElementById("block1").id = "foreignBlock1";
//     document.getElementById("block2").id = "foreignBlock2";
//     document.getElementById("block3").id = "foreignBlock3";
//     document.getElementById("block4").id = "foreignBlock4";
// };

// function childrenIds() {
//     document.getElementById("block1").id = "childrenBlock1";
//     document.getElementById("block2").id = "childrenBlock2";
//     document.getElementById("block3").id = "childrenBlock3";
//     document.getElementById("block4").id = "childrenBlock4";
// };

// function holidayIds() {
//     document.getElementById("block1").id = "holidayBlock1";
//     document.getElementById("block2").id = "holidayBlock2";
//     document.getElementById("block3").id = "holidayBlock3";
//     document.getElementById("block4").id = "holidayBlock4";
// };


// Change from first to second question

document.getElementById("block1").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("comedyq2").style.display = "block";
    changeToQuestion2();
    answers.push("comedy");
    console.log(answers);
};

document.getElementById("block2").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("dramaq2").style.display = "block";
    changeToQuestion2();
    answers.push("drama");
    console.log(answers);
};

document.getElementById("block3").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("actionq2").style.display = "block";
    changeToQuestion2();
    answers.push("action");
    console.log(answers);
};

document.getElementById("block4").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("suspenseq2").style.display = "block";
    changeToQuestion2();
    answers.push("suspense");
    console.log(answers);
};

document.getElementById("block5").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("horrorq2").style.display = "block";
    changeToQuestion2();
    answers.push("horror");
    console.log(answers);
};

document.getElementById("block6").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("foreignq2").style.display = "block";
    changeToQuestion2();
    answers.push("foreign");
    console.log(answers);
};

document.getElementById("block7").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("childrenq2").style.display = "block";
    changeToQuestion2();
    answers.push("children");
    console.log(answers);
};

document.getElementById("block8").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("holidayq2").style.display = "block";
    changeToQuestion2();
    answers.push("holiday");
    console.log(answers);
};


// Change choices to subgenres

// function lightComedy() {
//     document.getElementById("comedyBlock1").innerHTML = "Light Comedy";
// };

// function darkComedy() {
//     document.getElementById("comedyBlock2").innerHTML = "Dark Comedy";
// };

// function romanticComedy() {
//     document.getElementById("comedyBlock3").innerHTML = "Romantic Comedy";
// };


// Comedy Path
// Change from second to third question

document.getElementById("comedyBlock1").onclick = function() {
    document.getElementById("comedyq2").style.display = "none";
    document.getElementById("comedyPre1960q3").style.display = "block";
    changeToQuestion3();
    answers.push("Pre-1960");
    console.log(answers);
};

document.getElementById("comedyBlock2").onclick = function() {
    document.getElementById("comedyq2").style.display = "none";
    document.getElementById("comedy1960q3").style.display = "block";
    changeToQuestion3();
    answers.push("1960-1989");
    console.log(answers);
};

document.getElementById("comedyBlock3").onclick = function() {
    
    document.getElementById("comedyq2").style.display = "none";
    document.getElementById("comedy1990q3").style.display = "block";
    changeToQuestion3();
    answers.push("1990-2010");
    console.log(answers);
};

document.getElementById("comedyBlock4").onclick = function() {
    document.getElementById("comedyq2").style.display = "none";
    document.getElementById("comedy2011q3").style.display = "block";
    changeToQuestion3();
    answers.push("2011-2018");
    console.log(answers);
};





// document.getElementById("comedyBlock1").onclick = function() {
//     lightComedy();
//     darkComedy();
//     romanticComedy();
//     document.getElementById("comedyBlock4").style.display = "none";
//     answers.push("Pre-1960");
//     console.log(answers);
// };









