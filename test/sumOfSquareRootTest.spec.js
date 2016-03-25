 var chai = require('chai');
  var sumofSquareRoot = require('../js/sumOfSquareRoot.js');
  var expect = chai.expect;
  chai.should();

  describe('SumOfSquareRoot Function', function() {

    it('should be a function', function() {
      expect(sumofSquareRoot).to.be.a('function');
    });

    it('should take a number', function() {

      expect(sumofSquareRoot.bind(null, 'hello world')).to.throw(Error);

      // expect(sumOfSquareRoot(5)).to.be.a('number');
    });

    it('should return the sum of the square root of every number from 1 to the number that was passed in', function() {

      expect (sumofSquareRoot(1)).to.be.equal(1);
      expect (sumofSquareRoot(2)).to.be.equal(Math.sqrt(2)+ Math.sqrt(1));
    });


  });//end of SumofSquareRoot function

