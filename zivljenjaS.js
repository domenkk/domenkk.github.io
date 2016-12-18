Game.ZivljenjaS = function(game){};

var indeksZivShop = 0;
var nxtBtnZiv;
var prevBtnZiv;
var kupiZiv;
var coinProd;
var premaloDenarja = false;

Game.ZivljenjaS.prototype = {

create: function(game){
   this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'shopBck');

this.add.image(0,0,'zivSid');


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

    nxtBtnZiv = this.add.button(590, 280, 'naprS', function(){
        indeksZivShop++;
    }, this, 2,1,0 )

     prevBtnZiv = this.add.button(100, 280, 'nazS', function(){
        indeksZivShop--;
    }, this, 2,1,0 );

    kupiZiv = this.add.button(480, 410, 'kupiBtn', function(){
       if(indeksZivShop == 0){
           if(tockeV < 600){
               premaloDenarja = true;
               } else {
           zivljenjaVeganka = 6;
           console.log(zivljenjaVeganka);
           ziv6kup = true;
           tockeV-=600;
               }
       } else if(indeksZivShop == 1){
           if(tockeV < 1000){
                premaloDenarja = true;
           } else {
            zivljenjaVeganka = 7;
            ziv7kup = true;
           tockeV-=1000;
               }
       } else if(indeksZivShop == 2){
           if(tockeV < 2000){
                premaloDenarja = true;
           } else {
            zivljenjaVeganka = 8;
            ziv8kup = true;
           tockeV-=2000;
               }
       } else if(indeksZivShop == 3){
           if(tockeV < 3000){
                premaloDenarja = true;
           } else {
            zivljenjaVeganka = 9;
            ziv9kup = true;
           tockeV-=3000;
               }
       } else if(indeksZivShop == 4){
           if(tockeV < 5000){
                premaloDenarja = true;
           } else {
            zivljenjaVeganka = 10;
            ziv10kup = true;
           tockeV-=5000;
               }
       }

    }, this, 2,1,0 );
     this.add.image(10,10, 'coinS');
     denar = game.add.text(45, 7, '0', { fontSize: '32px', fill: '#000' });
    denar.fixedToCamera = true;

    coinProd = this.add.image(200,400, 'coinS');

},
update: function(game){

    zivljenjaV = zivljenjaVeganka;
     denar.text = tockeV;


    if(indeksZivShop == 0){
        this.add.image(0,-50,'6ziv');
        this.add.text(235, 398, '600', { fontSize: '32px', fill: '#000' });
        prevBtnZiv.visible = false;
        kupiZiv.bringToTop();
        coinProd.bringToTop();
         kupiZiv.visible = true;
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(ziv6kup){
             kupiZiv.visible = false;
        }
    }
    if(indeksZivShop == 1){
        this.add.image(0,-50,'7ziv');
        this.add.text(235, 398, '1000', { fontSize: '32px', fill: '#000' });
         prevBtnZiv.visible = true;
         kupiZiv.bringToTop();
        coinProd.bringToTop();
        kupiZiv.visible = true;
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(ziv7kup){
             kupiZiv.visible = false;
        }
    }
    if(indeksZivShop == 2){
        this.add.image(0,-50,'8ziv');
        this.add.text(235, 398, '2000', { fontSize: '32px', fill: '#000' });
         kupiZiv.bringToTop();
        coinProd.bringToTop();
        kupiZiv.visible = true;
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(ziv8kup){
             kupiZiv.visible = false;
        }
    }
    if(indeksZivShop == 3){
        this.add.image(0,-50,'9ziv');
        this.add.text(235, 398, '3000', { fontSize: '32px', fill: '#000' });
        nxtBtnZiv.visible = true;
         kupiZiv.bringToTop();
        coinProd.bringToTop();
        kupiZiv.visible = true;
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(ziv9kup){
             kupiZiv.visible = false;
        }
    }
    if(indeksZivShop == 4){
        this.add.image(0,-50,'10ziv');
        this.add.text(235, 398, '5000', { fontSize: '32px', fill: '#000' });
        nxtBtnZiv.visible = false;
         kupiZiv.bringToTop();
        coinProd.bringToTop();
        kupiZiv.visible = true;
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(ziv10kup){
             kupiZiv.visible = false;
        }
    }

},

}
