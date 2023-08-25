var topics = "HTML, CSS, Git, Javascript"; //string
console.log(topics);

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

/*
if (topic === 'HTML'){
    console.log("Let's study HTML!");
} else if (topic === 'CSS'){
    console.log("Let's study CSS!");
} else if (topic === 'Git'){
    console.log("Let's Study Git!")
} else if (topic === 'Javascript'){
    console.log("Let's study Javascript!")
} else {
    console.log('Please try again!');
}
*/

/*
for(x=0; x < topics.length; x++){  // My version before I looked at the guide answer
    console.log("Let's study " + topics[x] + "!");
}
*/

for (var x = 0; x < topics.length; x++) { //Guide answer, see above for mine
    console.log(topics[x]);
   }

var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++){
    console.log(shapes[x]);
}