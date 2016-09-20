var athleteStats = {

  start: function(){
    this.hydration = 100;
  },

  startMilage: function(){
    this.mile = 0;
  },

  run: function(){
    this.hydration -=10;
  },

  stopRunning: function(){
    if (this.hydration < 10){
      return;
    }
    this.hydration -= 10;
  },
  drink: function(){
    this.hydration += 10;
  }

};





module.exports = atheleteStats;

// 1. Athlete should have a hydration attribute that starts at 100.
// 2. Athlete should have a distance covered attribute starts at 0.
// 3. Athlete should be able to run:  increasing distance, decreasing hydration.
// 4. Athlete should not move when running dehydrated: hydration at 0;
// 5. Athlete should be able to increase hydration by drinking from water bottle