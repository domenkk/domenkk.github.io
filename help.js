Game.Help = function(game){};

Game.Help.prototype = {

create: function(game){
  //this.stage.backgroundColor = '#3A5963';
   this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'MMozadje');

   glasbaHe = this.add.audio("helpShopS");
   glasbaHe.play('', 0, 1, true);

     game.add.image(0, 0, 'titleMM');

    game.add.image(0, 0, 'sidroHlp');

    game.add.image(0,0, 'titleHlp');


  var btn1 = game.add.button(game.camera.x+400, game.camera.y+300,'sgpBtnH', function(){
      this.state.start('SingleHelp');
  }  , this, 2,1,0);
    btn1.anchor.setTo(0.5,0.5);
    var btn2 = game.add.button(game.camera.x+400, game.camera.y+390,'ctvBtnH', function(){
        this.state.start('CatchHelp');
    }  , this, 2,1,0);
      btn2.anchor.setTo(0.5,0.5);
      var btn3 = game.add.button(game.camera.x+400, game.camera.y+480,'1v1BtnH', function(){
          this.state.start('v1Help');
      }  , this, 2,1,0);
        btn3.anchor.setTo(0.5,0.5);
        var btnB = game.add.button(720, 125,'izhH', function(){
          glasbaHe.stop();
          this.state.start('MainMenu');
        }  , this, 2,1,0);


},
update: function(game){

},

}
