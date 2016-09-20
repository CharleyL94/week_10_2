var bottle = require( '../water_bottle');
var assert = require( 'assert' );

describe('Water Bottle', function() {

  //water bottle should be empty(X)
  it("should be empty", function(){
    assert.equal( 0, bottle.volume )
  })

  // water bottle should be full

  it("should be full", function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  })

  //water bottle should drink
  it("should go down", function() {
    bottle.fill();
    bottle.drink();
    assert.equal( 90, bottle.volume);
  })

  //should be 0 when emptied
  it("should be 0 when emptied", function() {
    bottle.empty();
    assert.equal(0, bottle.volume );
  })
  



})

