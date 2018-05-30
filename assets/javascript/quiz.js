
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


// Change from first to second question

document.getElementById("block1").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("comedyq2").style.display = "block";
    changeToQuestion2();
};

document.getElementById("block2").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("dramaq2").style.display = "block";
    changeToQuestion2();
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
};

document.getElementById("block7").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("childrenq2").style.display = "block";
    changeToQuestion2();
};

document.getElementById("block8").onclick = function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("otherq2").style.display = "block";
    changeToQuestion2();
};


// Comedy Path
// Change from second to third question

document.getElementById("comedyBlock1").onclick = function() {
    document.getElementById("comedyq2").style.display = "none";
    document.getElementById("comedyPre1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("comedyBlock2").onclick = function() {
    document.getElementById("comedyq2").style.display = "none";
    document.getElementById("comedy1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("comedyBlock3").onclick = function() {
    
    document.getElementById("comedyq2").style.display = "none";
    document.getElementById("comedy1990q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("comedyBlock4").onclick = function() {
    document.getElementById("comedyq2").style.display = "none";
    document.getElementById("comedy2011q3").style.display = "block";
    changeToQuestion3();
};

// Change from third to fourth question

// Pre-1960

document.getElementById("cpre1960Block1").onclick = function() {
    document.getElementById("comedyPre1960q3").style.display = "none";
    document.getElementById("comedyPre1960lcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("cpre1960Block2").onclick = function() {
    document.getElementById("comedyPre1960q3").style.display = "none";
    document.getElementById("comedyPre1960dcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("cpre1960Block3").onclick = function() {
    document.getElementById("comedyPre1960q3").style.display = "none";
    document.getElementById("comedyPre1960rcq4").style.display = "block";
    changeToQuestion4();
};

// 1960-1989

document.getElementById("c1960Block1").onclick = function() {
    document.getElementById("comedy1960q3").style.display = "none";
    document.getElementById("comedy1960lcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("c1960Block2").onclick = function() {
    document.getElementById("comedy1960q3").style.display = "none";
    document.getElementById("comedy1960dcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("c1960Block3").onclick = function() {
    document.getElementById("comedy1960q3").style.display = "none";
    document.getElementById("comedy1960rcq4").style.display = "block";
    changeToQuestion4();
};

// 1990-2010

document.getElementById("c1990Block1").onclick = function() {
    document.getElementById("comedy1990q3").style.display = "none";
    document.getElementById("comedy1990lcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("c1990Block2").onclick = function() {
    document.getElementById("comedy1990q3").style.display = "none";
    document.getElementById("comedy1990dcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("c1990Block3").onclick = function() {
    document.getElementById("comedy1990q3").style.display = "none";
    document.getElementById("comedy1990rcq4").style.display = "block";
    changeToQuestion4();
};

// 2011-2018

document.getElementById("c2011Block1").onclick = function() {
    document.getElementById("comedy2011q3").style.display = "none";
    document.getElementById("comedy2011lcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("c2011Block2").onclick = function() {
    document.getElementById("comedy2011q3").style.display = "none";
    document.getElementById("comedy2011dcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("c2011Block3").onclick = function() {
    document.getElementById("comedy2011q3").style.display = "none";
    document.getElementById("comedy2011rcq4").style.display = "block";
    changeToQuestion4();
};


// Drama Path
// Change from second to third question

document.getElementById("dramaBlock1").onclick = function() {
    document.getElementById("dramaq2").style.display = "none";
    document.getElementById("dramaPre1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("dramaBlock2").onclick = function() {
    document.getElementById("dramaq2").style.display = "none";
    document.getElementById("drama1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("dramaBlock3").onclick = function() {
    
    document.getElementById("dramaq2").style.display = "none";
    document.getElementById("drama1990q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("dramaBlock4").onclick = function() {
    document.getElementById("dramaq2").style.display = "none";
    document.getElementById("drama2011q3").style.display = "block";
    changeToQuestion3();
};

// Change from third to fourth question

// Pre-1960

document.getElementById("dpre1960Block1").onclick = function() {
    document.getElementById("dramaPre1960q3").style.display = "none";
    document.getElementById("dramaPre1960mdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("dpre1960Block2").onclick = function() {
    document.getElementById("dramaPre1960q3").style.display = "none";
    document.getElementById("dramaPre1960hdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("dpre1960Block3").onclick = function() {
    document.getElementById("dramaPre1960q3").style.display = "none";
    document.getElementById("dramaPre1960rdq4").style.display = "block";
    changeToQuestion4();
};

// 1960-1989

document.getElementById("d1960Block1").onclick = function() {
    document.getElementById("drama1960q3").style.display = "none";
    document.getElementById("drama1960mdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("d1960Block2").onclick = function() {
    document.getElementById("drama1960q3").style.display = "none";
    document.getElementById("drama1960hdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("d1960Block3").onclick = function() {
    document.getElementById("drama1960q3").style.display = "none";
    document.getElementById("drama1960rdq4").style.display = "block";
    changeToQuestion4();
};

// 1990-2010

document.getElementById("d1990Block1").onclick = function() {
    document.getElementById("drama1990q3").style.display = "none";
    document.getElementById("drama1990mdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("d1990Block2").onclick = function() {
    document.getElementById("drama1990q3").style.display = "none";
    document.getElementById("drama1990hdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("d1990Block3").onclick = function() {
    document.getElementById("drama1990q3").style.display = "none";
    document.getElementById("drama1990rdq4").style.display = "block";
    changeToQuestion4();
};

// 2011-2018

document.getElementById("d2011Block1").onclick = function() {
    document.getElementById("drama2011q3").style.display = "none";
    document.getElementById("drama2011mdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("d2011Block2").onclick = function() {
    document.getElementById("drama011q3").style.display = "none";
    document.getElementById("drama2011hdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("d2011Block3").onclick = function() {
    document.getElementById("drama2011q3").style.display = "none";
    document.getElementById("drama2011rdq4").style.display = "block";
    changeToQuestion4();
};


// Action Path
// Change from second to third question

document.getElementById("actionBlock1").onclick = function() {
    document.getElementById("actionq2").style.display = "none";
    document.getElementById("actionPre1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("actionBlock2").onclick = function() {
    document.getElementById("actionq2").style.display = "none";
    document.getElementById("action1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("actionBlock3").onclick = function() {
    
    document.getElementById("actionq2").style.display = "none";
    document.getElementById("action1990q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("actionBlock4").onclick = function() {
    document.getElementById("actionq2").style.display = "none";
    document.getElementById("action2011q3").style.display = "block";
    changeToQuestion3();
};

// Change from third to fourth question

// Pre-1960

document.getElementById("apre1960Block1").onclick = function() {
    document.getElementById("actionPre1960q3").style.display = "none";
    document.getElementById("actionPre1960shq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("apre1960Block2").onclick = function() {
    document.getElementById("actionPre1960q3").style.display = "none";
    document.getElementById("actionPre1960sfq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("apre1960Block3").onclick = function() {
    document.getElementById("actionPre1960q3").style.display = "none";
    document.getElementById("actionPre1960otq4").style.display = "block";
    changeToQuestion4();
};

// 1960-1989

document.getElementById("a1960Block1").onclick = function() {
    document.getElementById("action1960q3").style.display = "none";
    document.getElementById("action1960shq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("a1960Block2").onclick = function() {
    document.getElementById("action1960q3").style.display = "none";
    document.getElementById("action1960sfq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("a1960Block3").onclick = function() {
    document.getElementById("action1960q3").style.display = "none";
    document.getElementById("action1960otq4").style.display = "block";
    changeToQuestion4();
};

// 1990-2010

document.getElementById("a1990Block1").onclick = function() {
    document.getElementById("action1990q3").style.display = "none";
    document.getElementById("action1990shq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("a1990Block2").onclick = function() {
    document.getElementById("action1990q3").style.display = "none";
    document.getElementById("action1990sfq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("a1990Block3").onclick = function() {
    document.getElementById("action1990q3").style.display = "none";
    document.getElementById("action1990otq4").style.display = "block";
    changeToQuestion4();
};

// 2011-2018

document.getElementById("a2011Block1").onclick = function() {
    document.getElementById("action2011q3").style.display = "none";
    document.getElementById("action2011shq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("a2011Block2").onclick = function() {
    document.getElementById("action2011q3").style.display = "none";
    document.getElementById("action2011sfq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("a2011Block3").onclick = function() {
    document.getElementById("action2011q3").style.display = "none";
    document.getElementById("action2011otq4").style.display = "block";
    changeToQuestion4();
};


// Suspense Path
// Change from second to third question

document.getElementById("suspenseBlock1").onclick = function() {
    document.getElementById("suspenseq2").style.display = "none";
    document.getElementById("suspensePre1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("suspenseBlock2").onclick = function() {
    document.getElementById("suspenseq2").style.display = "none";
    document.getElementById("suspense1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("suspenseBlock3").onclick = function() {
    
    document.getElementById("suspenseq2").style.display = "none";
    document.getElementById("suspense1990q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("suspenseBlock4").onclick = function() {
    document.getElementById("suspenseq2").style.display = "none";
    document.getElementById("suspense2011q3").style.display = "block";
    changeToQuestion3();
};

// Change from third to fourth question

// Pre-1960

document.getElementById("spre1960Block1").onclick = function() {
    document.getElementById("suspensePre1960q3").style.display = "none";
    document.getElementById("suspensePre1960myq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("spre1960Block2").onclick = function() {
    document.getElementById("suspensePre1960q3").style.display = "none";
    document.getElementById("suspensePre1960ptq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("spre1960Block3").onclick = function() {
    document.getElementById("suspensePre1960q3").style.display = "none";
    document.getElementById("suspensePre1960otq4").style.display = "block";
    changeToQuestion4();
};

// 1960-1989

document.getElementById("s1960Block1").onclick = function() {
    document.getElementById("suspense1960q3").style.display = "none";
    document.getElementById("suspense1960myq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("s1960Block2").onclick = function() {
    document.getElementById("suspense1960q3").style.display = "none";
    document.getElementById("suspense1960ptq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("s1960Block3").onclick = function() {
    document.getElementById("suspense1960q3").style.display = "none";
    document.getElementById("suspense1960otq4").style.display = "block";
    changeToQuestion4();
};

// 1990-2010

document.getElementById("s1990Block1").onclick = function() {
    document.getElementById("suspense1990q3").style.display = "none";
    document.getElementById("suspense1990myq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("s1990Block2").onclick = function() {
    document.getElementById("suspense1990q3").style.display = "none";
    document.getElementById("suspense1990ptq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("s1990Block3").onclick = function() {
    document.getElementById("suspense1990q3").style.display = "none";
    document.getElementById("suspense1990otq4").style.display = "block";
    changeToQuestion4();
};

// 2011-2018

document.getElementById("s2011Block1").onclick = function() {
    document.getElementById("suspense2011q3").style.display = "none";
    document.getElementById("suspense2011myq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("s2011Block2").onclick = function() {
    document.getElementById("suspense2011q3").style.display = "none";
    document.getElementById("suspense2011ptq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("s2011Block3").onclick = function() {
    document.getElementById("suspense2011q3").style.display = "none";
    document.getElementById("suspense2011otq4").style.display = "block";
    changeToQuestion4();
};


// Horror Path
// Change from second to third question

document.getElementById("horrorBlock1").onclick = function() {
    document.getElementById("horrorq2").style.display = "none";
    document.getElementById("horrorPre1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("horrorBlock2").onclick = function() {
    document.getElementById("horrorq2").style.display = "none";
    document.getElementById("horror1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("horrorBlock3").onclick = function() {
    
    document.getElementById("horrorq2").style.display = "none";
    document.getElementById("horror1990q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("horrorBlock4").onclick = function() {
    document.getElementById("horrorq2").style.display = "none";
    document.getElementById("horror2011q3").style.display = "block";
    changeToQuestion3();
};

// Change from third to fourth question

// Pre-1960

document.getElementById("hpre1960Block1").onclick = function() {
    document.getElementById("horrorPre1960q3").style.display = "none";
    document.getElementById("horrorPre1960phq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("hpre1960Block2").onclick = function() {
    document.getElementById("horrorPre1960q3").style.display = "none";
    document.getElementById("horrorPre1960mmq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("hpre1960Block3").onclick = function() {
    document.getElementById("horrorPre1960q3").style.display = "none";
    document.getElementById("horrorPre1960sfq4").style.display = "block";
    changeToQuestion4();
};

// 1960-1989

document.getElementById("h1960Block1").onclick = function() {
    document.getElementById("horror1960q3").style.display = "none";
    document.getElementById("horror1960phq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("h1960Block2").onclick = function() {
    document.getElementById("horror1960q3").style.display = "none";
    document.getElementById("horror1960mmq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("h1960Block3").onclick = function() {
    document.getElementById("horror1960q3").style.display = "none";
    document.getElementById("horror1960sfq4").style.display = "block";
    changeToQuestion4();
};

// 1990-2010

document.getElementById("h1990Block1").onclick = function() {
    document.getElementById("horror1990q3").style.display = "none";
    document.getElementById("horror1990phq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("h1990Block2").onclick = function() {
    document.getElementById("horror1990q3").style.display = "none";
    document.getElementById("horror1990mmq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("h1990Block3").onclick = function() {
    document.getElementById("horror1990q3").style.display = "none";
    document.getElementById("horror1990sfq4").style.display = "block";
    changeToQuestion4();
};

// 2011-2018

document.getElementById("h2011Block1").onclick = function() {
    document.getElementById("horror2011q3").style.display = "none";
    document.getElementById("horror2011phq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("h2011Block2").onclick = function() {
    document.getElementById("horror2011q3").style.display = "none";
    document.getElementById("horror2011dcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("h2011Block3").onclick = function() {
    document.getElementById("horror2011q3").style.display = "none";
    document.getElementById("horror2011sfq4").style.display = "block";
    changeToQuestion4();
};


// Foreign Path
// Change from second to third question

document.getElementById("foreignBlock1").onclick = function() {
    document.getElementById("foreignq2").style.display = "none";
    document.getElementById("foreignPre1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("foreignBlock2").onclick = function() {
    document.getElementById("foreignq2").style.display = "none";
    document.getElementById("foreign1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("foreignBlock3").onclick = function() {
    
    document.getElementById("foreignq2").style.display = "none";
    document.getElementById("foreign1990q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("foreignBlock4").onclick = function() {
    document.getElementById("foreignq2").style.display = "none";
    document.getElementById("foreign2011q3").style.display = "block";
    changeToQuestion3();
};

// Change from third to fourth question

// Pre-1960

document.getElementById("fpre1960Block1").onclick = function() {
    document.getElementById("foreignPre1960q3").style.display = "none";
    document.getElementById("foreignPre1960fcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("fpre1960Block2").onclick = function() {
    document.getElementById("foreignPre1960q3").style.display = "none";
    document.getElementById("foreignPre1960fdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("fpre1960Block3").onclick = function() {
    document.getElementById("foreignPre1960q3").style.display = "none";
    document.getElementById("foreignPre1960faq4").style.display = "block";
    changeToQuestion4();
};

// 1960-1989

document.getElementById("f1960Block1").onclick = function() {
    document.getElementById("foreign1960q3").style.display = "none";
    document.getElementById("foreign1960fcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("f1960Block2").onclick = function() {
    document.getElementById("foreign1960q3").style.display = "none";
    document.getElementById("foreign1960fdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("f1960Block3").onclick = function() {
    document.getElementById("foreign1960q3").style.display = "none";
    document.getElementById("foreign1960faq4").style.display = "block";
    changeToQuestion4();
};

// 1990-2010

document.getElementById("f1990Block1").onclick = function() {
    document.getElementById("foreign1990q3").style.display = "none";
    document.getElementById("foreign1990fcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("f1990Block2").onclick = function() {
    document.getElementById("foreign1990q3").style.display = "none";
    document.getElementById("foreign1990fdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("f1990Block3").onclick = function() {
    document.getElementById("foreign1990q3").style.display = "none";
    document.getElementById("foreign1990faq4").style.display = "block";
    changeToQuestion4();
};

// 2011-2018

document.getElementById("f2011Block1").onclick = function() {
    document.getElementById("foreign2011q3").style.display = "none";
    document.getElementById("foreign2011fcq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("f2011Block2").onclick = function() {
    document.getElementById("foreign2011q3").style.display = "none";
    document.getElementById("foreign2011fdq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("f2011Block3").onclick = function() {
    document.getElementById("foreign2011q3").style.display = "none";
    document.getElementById("foreign2011faq4").style.display = "block";
    changeToQuestion4();
};


// Children Path
// Change from second to third question

document.getElementById("childrenBlock1").onclick = function() {
    document.getElementById("childrenq2").style.display = "none";
    document.getElementById("childrenPre1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("childrenBlock2").onclick = function() {
    document.getElementById("childrenq2").style.display = "none";
    document.getElementById("children1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("childrenBlock3").onclick = function() {
    
    document.getElementById("childrenq2").style.display = "none";
    document.getElementById("children1990q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("childrenBlock4").onclick = function() {
    document.getElementById("childrenq2").style.display = "none";
    document.getElementById("children2011q3").style.display = "block";
    changeToQuestion3();
};

// Change from third to fourth question

// Pre-1960

document.getElementById("chpre1960Block1").onclick = function() {
    document.getElementById("childrenPre1960q3").style.display = "none";
    document.getElementById("childrenPre1960anq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("chpre1960Block2").onclick = function() {
    document.getElementById("childrenPre1960q3").style.display = "none";
    document.getElementById("childrenPre1960laq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("chpre1960Block3").onclick = function() {
    document.getElementById("childrenPre1960q3").style.display = "none";
    document.getElementById("childrenPre1960edq4").style.display = "block";
    changeToQuestion4();
};

// 1960-1989

document.getElementById("ch1960Block1").onclick = function() {
    document.getElementById("children1960q3").style.display = "none";
    document.getElementById("children1960anq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("ch1960Block2").onclick = function() {
    document.getElementById("children1960q3").style.display = "none";
    document.getElementById("children1960laq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("ch1960Block3").onclick = function() {
    document.getElementById("children1960q3").style.display = "none";
    document.getElementById("children1960edq4").style.display = "block";
    changeToQuestion4();
};

// 1990-2010

document.getElementById("ch1990Block1").onclick = function() {
    document.getElementById("children1990q3").style.display = "none";
    document.getElementById("children1990anq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("ch1990Block2").onclick = function() {
    document.getElementById("children1990q3").style.display = "none";
    document.getElementById("children1990laq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("ch1990Block3").onclick = function() {
    document.getElementById("children1990q3").style.display = "none";
    document.getElementById("children1990edq4").style.display = "block";
    changeToQuestion4();
};

// 2011-2018

document.getElementById("ch2011Block1").onclick = function() {
    document.getElementById("children2011q3").style.display = "none";
    document.getElementById("children2011anq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("ch2011Block2").onclick = function() {
    document.getElementById("children2011q3").style.display = "none";
    document.getElementById("children2011laq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("ch2011Block3").onclick = function() {
    document.getElementById("children2011q3").style.display = "none";
    document.getElementById("children2011edq4").style.display = "block";
    changeToQuestion4();
};


// Other Path
// Change from second to third question

document.getElementById("otherBlock1").onclick = function() {
    document.getElementById("otherq2").style.display = "none";
    document.getElementById("otherPre1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("otherBlock2").onclick = function() {
    document.getElementById("otherq2").style.display = "none";
    document.getElementById("other1960q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("otherBlock3").onclick = function() {
    
    document.getElementById("otherq2").style.display = "none";
    document.getElementById("other1990q3").style.display = "block";
    changeToQuestion3();
};

document.getElementById("otherBlock4").onclick = function() {
    document.getElementById("otherq2").style.display = "none";
    document.getElementById("other2011q3").style.display = "block";
    changeToQuestion3();
};

// Change from third to fourth question

// Pre-1960

document.getElementById("opre1960Block1").onclick = function() {
    document.getElementById("otherPre1960q3").style.display = "none";
    document.getElementById("otherPre1960hmq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("opre1960Block2").onclick = function() {
    document.getElementById("otherPre1960q3").style.display = "none";
    document.getElementById("otherPre1960doq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("opre1960Block3").onclick = function() {
    document.getElementById("otherPre1960q3").style.display = "none";
    document.getElementById("otherPre1960miq4").style.display = "block";
    changeToQuestion4();
};

// 1960-1989

document.getElementById("o1960Block1").onclick = function() {
    document.getElementById("other1960q3").style.display = "none";
    document.getElementById("other1960hmq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("o1960Block2").onclick = function() {
    document.getElementById("other1960q3").style.display = "none";
    document.getElementById("other1960doq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("o1960Block3").onclick = function() {
    document.getElementById("other1960q3").style.display = "none";
    document.getElementById("other1960miq4").style.display = "block";
    changeToQuestion4();
};

// 1990-2010

document.getElementById("o1990Block1").onclick = function() {
    document.getElementById("other1990q3").style.display = "none";
    document.getElementById("other1990hmq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("o1990Block2").onclick = function() {
    document.getElementById("other1990q3").style.display = "none";
    document.getElementById("other1990doq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("o1990Block3").onclick = function() {
    document.getElementById("other1990q3").style.display = "none";
    document.getElementById("other1990miq4").style.display = "block";
    changeToQuestion4();
};

// 2011-2018

document.getElementById("o2011Block1").onclick = function() {
    document.getElementById("other2011q3").style.display = "none";
    document.getElementById("other2011hmq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("o2011Block2").onclick = function() {
    document.getElementById("other2011q3").style.display = "none";
    document.getElementById("other2011doq4").style.display = "block";
    changeToQuestion4();
};

document.getElementById("o2011Block3").onclick = function() {
    document.getElementById("other2011q3").style.display = "none";
    document.getElementById("other2011miq4").style.display = "block";
    changeToQuestion4();
};