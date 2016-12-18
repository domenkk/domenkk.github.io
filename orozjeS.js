Game.OrozjeS = function(game){};

var indeksOroShop = 0;
var nxtBtnOro;
var prevBtnOro;
var kupiOro;


Game.OrozjeS.prototype = {

create: function(game){
  //this.stage.backgroundColor = '#3A5963';
   this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'shopBck');

this.add.image(0,0,'oroSid');


  var btn1 = game.add.button(120, 120,'zivS', function(){
      this.state.start('ZivljenjaS');
  }  , this, 2,1,0);
    btn1.anchor.setTo(0.5,0.5);

    var btn2 = game.add.button(240, 120,'oroS', function(){
      this.state.start('OrozjeS');
  }  , this, 2,1,0);
    btn2.anchor.setTo(0.5,0.5);

      var btn3 = game.add.button(370, 130,'oblS', function(){
      this.state.start('OblacilaS');
  }  , this, 2,1,0);
    btn3.anchor.setTo(0.5,0.5);

      var btn4 = game.add.button(500, 130,'okoS', function(){
      this.state.start('OkoljeS');
  }  , this, 2,1,0);
    btn4.anchor.setTo(0.5,0.5);

    var btn5 = game.add.button(740, 160,'izhNak', function(){
        this.state.start('Shop');
        glasbaSh.stop();
    }  , this, 2,1,0);
      btn5.anchor.setTo(0.5,0.5);

    this.add.image(0,-50,'6ziv');

    nxtBtnOro = this.add.button(590, 280, 'naprS', function(){
        indeksOroShop++;
    }, this, 2,1,0 )

     prevBtnOro = this.add.button(100, 280, 'nazS', function(){
        indeksOroShop--;
    }, this, 2,1,0 );

    kupiOro = this.add.button(480, 410, 'kupiBtn', function(){

    }, this, 2,1,0 );



},
update: function(game){

    if(indeksOroShop == 0){
        this.add.image(0,-50,'ananasP');
        prevBtnOro.visible = false;
        kupiOro.bringToTop();
    }
    if(indeksOroShop == 1){
        this.add.image(0,-50,'bananaP');
         prevBtnOro.visible = true;
         kupiOro.bringToTop();
    }
    if(indeksOroShop == 2){
        this.add.image(0,-50,'cesnjeP');
         kupiOro.bringToTop();
    }
    if(indeksOroShop == 3){
        this.add.image(0,-50,'grenivkaP');
         kupiOro.bringToTop();
    }
    if(indeksOroShop == 4){
        this.add.image(0,-50,'grozdjeP');
         kupiOro.bringToTop();
    }
    if(indeksOroShop == 5){
        this.add.image(0,-50,'hruskaP');
         kupiOro.bringToTop();
    }
    if(indeksOroShop == 6){
        this.add.image(0,-50,'jabolkoP');
         kupiOro.bringToTop();
    }
    if(indeksOroShop == 7){
        this.add.image(0,-50,'jagodaP');
         kupiOro.bringToTop();
    }
    if(indeksOroShop == 8){
        this.add.image(0,-50,'limonaP');
        nxtBtnOro.visible = true;
         kupiOro.bringToTop();
    }
    if(indeksOroShop == 9){
        this.add.image(0,-50,'lubenicaP');
        nxtBtnOro.visible = false;
         kupiOro.bringToTop();
    }

},

}
