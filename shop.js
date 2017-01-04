Game.Shop = function(game){};

var denar;
var izbranaV;
var izbranM;
var vegIm;
var vegBtn;
var mesIm;
var mesBtn;

Game.Shop.prototype = {

create: function(game){
  //this.stage.backgroundColor = '#3A5963';
   this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'shopBck');

   shopS = this.add.audio("helpShopS");
   shopS.play('', 0, 1, true);

    izbranaV = true;
    izbranM = false

  var btn1 = game.add.button(140, 220,'nakBtnS', function(){
      this.state.start('ZivljenjaS');
  }  , this, 2,1,0);
    btn1.anchor.setTo(0.5,0.5);
    var btn2 = game.add.button(140, 140,'izhBtnS', function(){
        shopS.stop();
        this.state.start('MainMenu');
    }  , this, 2,1,0);
      btn2.anchor.setTo(0.5,0.5);

    vegIm = game.add.image(550,50,'izbrV');
    vegBtn = game.add.button(550,50,'neizV', function(){
      izbranaV = true;
        izbranM = false;
   }  , this, 2,1,0);
   
    
    mesIm = game.add.image(650,50, 'izbrM');
    mesBtn =  game.add.button(650,50,'neizM', function(){
      izbranM = true;
        izbranaV = false;
   }  , this, 2,1,0);

    this.add.image(10,10, 'coinS');
    denar = game.add.text(45, 7, '0', { fontSize: '32px', fill: '#000' });
    denar.fixedToCamera = true;



},
update: function(game){
    denar.text = tockeV;
    
    if(izbranaV){
        vegBtn.visible = false;
        vegIm.visible = true;
        mesBtn.visible = true;
        mesIm.visible = false;
    }
    if(izbranM){
        vegBtn.visible = true;
        vegIm.visible = false;
        mesBtn.visible = false;
        mesIm.visible = true;
    }
    
},

}
