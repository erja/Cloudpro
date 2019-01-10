
# JavaScript Language

This week introduces the two key data types in JS: objects and functions. Get used to their basic syntax and common use cases. This is an alternative to `alt1` exercises.

## Task List
1. Make a simple calculator.
2. Insert the needed functionality to the manipulating of cargo hold.
3. Get yourself familiar with the Module Pattern in Javascript and improve the List of People application. 

# 1 Calculator

The calculator has only ability to add and multiply numbers. It other aritmetic operations are added, you should consider also what kind of results you get from the operations. 

### TODO 1 Test Your Understanding
Open `calc.js` file. Improve the calculator with division and subtraction. Make sure that the page is usable without any instructions. The labels, buttons and texts should be enough to use it.

# 2  Cargo

The code has only templates for making new objects like bags, different stuff you can put in a bag, and a cargo hold where you can put bags. You have to implement the handling of cargo.

Remember we had Jasmine a behavior-driven development framework for testing JavaScript code in earlier courses (see [documentation](https://jasmine.github.io/2.1/introduction.html)) or [web techiques](https://github.com/covcom/205CDE/blob/master/labs/11%20Unit%20Testing/worksheet.md).


### TODO 2 Test Your Understanding

Every Stuff has a name and weight. You can add Stuff in a Bag and a Bag has a maximum weight. In a Cargo hold you can put Bags, and also the Cargo hold has a maximum weight.
You can add Stuff only in a Bag and Bag only in a Cargo.
You can't put too much Stuff in a Bag, or too many Bags in a Cargo hold (this means not more than max weight).

The boilerplate code in `docker.js` file has Stuff, Bag and Cargo skeletons, you have to write the code. the boilerplate code has console.log statements for informing illegal situations, you can use this code for designing Jasmine tests for your code. For example the next snippets tries to check that Bag's weight is correct 
```
bag.add(stone);
console.log("Bag's weight should be 3: " + bag.weight());
```
Having `console.log´ everywhere in your program code it not a proper way to check this. Using test frameworks like Jasmine with a test case is more usefull. The code changes to 
```
describe("A spec using beforeAll", function() {
  var stone, bag; 
  beforeAll(function() {
    bag = new Bag(10);
    stone = new Stuff("stone", 3);
  });
it('Bag's weight should be 3: ’, function(){
    expect((bag.add(stone)).weight()).toBe(3);
  });
```

# 3 List of People

The boilerplate code in `listofpersons.js` has a sketch for developing an application for people data management. The code is made according to module pattern. The only function call outside manager name area is init function.

### TODO 3 Test Your Understanding

Implement following functionalities
 
1.	The event listener for the button in the form (manager.gui.buttonPressed())
2.	Adding a person (manager.data.addPerson(person))
3.	Listing all the people (manager.data.list())

You must also consider the correct visibilities for the functions in the manager.data-module.
