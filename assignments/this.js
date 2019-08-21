/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayWord(word) {
    console.log(this);
    return word;
  }
  sayWord("Oops");
  

// Principle 2

// code example for Implicit Binding

const myName = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myName.sayHello('Nathan');
  

// Principle 3

// code example for New Binding

function HappyGuy(dude) {
    this.dude = 'Hello ';
    this.dude = dude;
    this.speak = function() {
      console.log(this.dude + this.dude);
      console.log(this);
    };
  }
  
  const taz = new HappyGuy('Arthur');
  const arthur = new HappyGuy('Taz');
  
  arthur.speak();
  taz.speak();
  

// Principle 4

// code example for Explicit Binding

arthur.speak.call(taz); taz.speak.apply(arthur);