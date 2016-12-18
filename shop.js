Game.Shop = function(game){};

var denar;

Game.Shop.prototype = {

create: function(game){

   this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'shopBck');
   glasbaSh = this.add.audio("helpShopS");
   glasbaSh.play('', 0, 1, true);


  var btn1 = game.add.button(140, 220,'nakBtnS', function(){
      this.state.start('ZivljenjaS');
  }  , this, 2,1,0);
    btn1.anchor.setTo(0.5,0.5);
    var btn2 = game.add.button(140, 140,'izhBtnS', function(){
        this.state.start('MainMenu');
        glasbaSh.stop();
    }  , this, 2,1,0);
      btn2.anchor.setTo(0.5,0.5);

    this.add.image(550,50,'izbrV');
    this.add.image(650,50, 'neizM');

    this.add.image(10,10, 'coinS');
    denar = game.add.text(45, 7, '0', { fontSize: '32px', fill: '#000' });
    denar.fixedToCamera = true;

},
update: function(game){
    denar.text = tockeV;
},

}
