Game.OkoljeS = function(game){};

var indeksOkoShop = 0;
var nxtBtnOro;
var prevBtnOro;
var kupiOro;
var coinProd;
var premaloDenarja = false;

Game.OkoljeS.prototype = {

create: function(game){
  //this.stage.backgroundColor = '#3A5963';
   this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'shopBck');

this.add.image(0,0,'oroSid');


  var btn1 = game.add.button(120, 120,'zivS', function(){
      this.state.start('ZivljenjaS');
  }  , this, 2,1,0);
    btn1.anchor.setTo(0.5,0.5);

    var btn2 = game.add.button(240, 120,'oroS', function(){
        if(izbranaV){
      this.state.start('OrozjeS');
            } else if(izbranM){
                this.state.start('OrozjeM');
            }
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
      shopS.stop();
        this.state.start('Shop');
    }  , this, 2,1,0);
      btn5.anchor.setTo(0.5,0.5);

    this.add.image(0,-50,'6ziv');

    nxtBtnOro = this.add.button(590, 280, 'naprS', function(){
        indeksOkoShop++;
    }, this, 2,1,0 )

     prevBtnOro = this.add.button(100, 280, 'nazS', function(){
        indeksOkoShop--;
    }, this, 2,1,0 );

    kupiOro = this.add.button(480, 410, 'kupiBtn', function(){
        
        if(tockeV < 500){
            premaloDenarja = true;
        } else {
            if(indeksOkoShop == 0){
                oko0 = 1;
            } else if (indeksOkoShop == 1){
                oko1 = 1;
            }
            okolje = indeksOkoShop;
            tockeV-=500;
        }
        
    }, this, 2,1,0 );

     this.add.image(10,10, 'coinS');
     denar = game.add.text(45, 7, '0', { fontSize: '32px', fill: '#000' });
    denar.fixedToCamera = true;
    
    
    coinProd = this.add.image(200,400, 'coinS');

},
update: function(game){
    
     denar.text = tockeV;

    if(indeksOkoShop == 0){
        this.add.image(0,-50,'zimaP');
        this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        prevBtnOro.visible = false;
        nxtBtnOro.visible = true;
        //kupiOro.visible = true;
        kupiOro.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oko0 == 1){
            kupiOro.visible = false;
        } else {
            kupiOro.visible = true;
        }
    }
    
    if(indeksOkoShop == 1){
        this.add.image(0,-50,'jesenP');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnOro.visible = false;
        prevBtnOro.visible = true;
        kupiOro.visible = true;
         kupiOro.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oko1 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }

},

}
