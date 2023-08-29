var topics = "HTML, CSS, Git, Javascript"; //string
//console.log(topics);

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random()*topics.length)];





/*
for(x=0; x < topics.length; x++){  // My version before I looked at the guide answer
    console.log("Let's study " + topics[x] + "!");
}
*/
function listTopics(){
    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML'){
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS'){
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git'){
        console.log("Let's Study Git!")
    } else if (randomTopic === 'Javascript'){
        console.log("Let's study Javascript!")
    } else {
        console.log('Please try again!');
    } 
}
/*
for (var x = 0; x < topics.length; x++) { //Guide answer, see above for mine
    console.log(topics[x]);
   }
*/
/*
var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++){
    console.log(shapes[x]);
}
*/
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();