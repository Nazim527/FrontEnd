function greet(name) {
  if (name === "Alice") {
   return "Hello, Alice!";
  } else if (name === "Bob") {
   return "Hello, Bob!";
  } else {
   return "Hello, stranger!";
  }
 }
 
 var message = greet("Bob");
 console.log(message)