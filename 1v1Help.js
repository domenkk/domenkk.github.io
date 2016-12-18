Game.v1Help = function(game){};

Game.v1Help.prototype = {

create: function(game){
  this.stage.backgroundColor = '#3A5963';
    this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'MMozadje');

     game.add.image(0, 0, 'titleMM');

    //game.add.image(0, 0, 'sidroHlp');


    var imgH = game.add.image(game.camera.x+405,game.camera.x+350, '1v1Hlp');
    imgH.anchor.set(0.5,0.5);

            var btnB = game.add.button(720, 125,'izhH', function(){
              glasbaHe.stop();
              this.state.start('MainMenu');
        }  , this, 2,1,0);

            var btnB = game.add.button(110, 160,'bckArHlp', function(){
              glasbaHe.stop();
              this.state.start('Help');
        }  , this, 2,1,0);



},
update: function(game){

},

}
