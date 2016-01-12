console.log('hello world');

// Padding functions arround
function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}


execute(say,'Max');

// OR get rid of say and right the function right there

execute(function(word){console.log(word);},'Jacobsen');
