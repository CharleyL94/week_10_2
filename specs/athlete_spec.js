var athlete = require('../athlete');
var assert = require( 'assert' );

describe('Athlete Stats', function(){

it('should start fully hydrated', function(){
  assert.equal(100, athlete.start);
})

it('should start with 0 miles',function(){
  assert.equal(o, athlete.startMilage);
})

it('should decrease hydration when running', function(){
  athlete.start();
  athlete.run();
  assert.equal(90, athlete.hydration)
})

it('should stop running if dehydrated', function(){
  athlete.hydration
  athlete.stopRunning();
  assert.equal(0, athlete.hydration);


})

it('should be able to rehydrate', function(){
  athlete.drink();
  assert.equal(10, athlete.drink);

})







})