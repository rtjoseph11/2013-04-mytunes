var SongQueue = Songs.extend({
  model:Song,

  //check back if we're doing proper event listening in the right place
  initialize: function(){

    this.on('add',function() {
      if (this.length===1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.shift();
      if (this.length>0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {

    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});
