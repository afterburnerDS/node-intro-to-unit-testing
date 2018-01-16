// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzbuzzer
const fizzbuzzer = require('../adder');

// unit tests for our `adder` function
describe('fizzbuzzer', function() {

  // test the normal case
  it('should return fizz for %3, buzz for %5, fizzbuzz for both, number for neither', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 3,  expected: 'fizz'},
      {a: 5, expected: 'buzz'},
      {a: 15, expected: 'fizzbuzz'},
      {a: 6, expected: 6}
    ];
    // for each set of inputs (a, b), `fizzbuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzbuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      [null],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzbuzzer(input);
      }).to.throw(Error);
    });
  });
});