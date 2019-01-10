// koodi:
var stone = new Stuff("stone", 3);
var book = new Stuff("book", 7);
var cotton = new Stuff("cotton", 0.001);

var bag = new Bag(10);
var vuitton = new Bag(3);

var schenker = new Cargo(15);


bag.add(stone);
console.log("Bag's weight should be 3: " + bag.weight());
bag.add(stone); // Error: "Stuff already added, not allowed!"

bag.add(book);
console.log("Bag's weight should be 10: " + bag.weight());

bag.add(cotton); // Error: "Too heavy, not allowed!"

console.log("Bag's weight should be 10: " + bag.weight());


schenker.add(bag);
schenker.add(cotton); // Error: Wrong kind of object, not allowed!

console.log("Cargo's weight should be 10: " + schenker.weight());

vuitton.add(cotton);
schenker.add(vuitton);
console.log("Cargo's weight should be about 10.001: " + schenker.weight()); 

cotton.weight = 300;
console.log("Cargo's weight should be 310: " + schenker.weight()); // oops!
