Game.OrozjeS = function(game){};

var indeksOroShop = 0;
var nxtBtnOro;
var prevBtnOro;
var kupiOro;
var coinProd;
var premaloDenarja = false;

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
        indeksOroShop++;
    }, this, 2,1,0 )

     prevBtnOro = this.add.button(100, 280, 'nazS', function(){
        indeksOroShop--;
    }, this, 2,1,0 );

    kupiOro = this.add.button(480, 410, 'kupiBtn', function(){
        if(tockeV < 200){
               premaloDenarja = true;
        } else {
        if(indeksOroShop == 0){
            orV0 = 1;
        } else if(indeksOroShop == 1){
            orV1 = 1;
        } else if(indeksOroShop == 2){
            orV2 = 1;
        }else if(indeksOroShop == 3){
            orV3 = 1;
        }else if(indeksOroShop == 4){
            orV4 = 1;
        }else if(indeksOroShop == 5){
            orV5 = 1;
        }else if(indeksOroShop == 6){
            orV6 = 1;
        }else if(indeksOroShop == 7){
            orV7 = 1;
        }else if(indeksOroShop == 8){
            orV8 = 1;
        }else if(indeksOroShop == 9){
            orV9 = 1;
        }
        orozjeVeganka = indeksOroShop;
        tockeV=tockeV-200;
            }
    }, this, 2,1,0 );

     this.add.image(10,10, 'coinS');
     denar = game.add.text(45, 7, '0', { fontSize: '32px', fill: '#000' });
    denar.fixedToCamera = true;
    
    
    coinProd = this.add.image(200,400, 'coinS');

},
update: function(game){
    
     denar.text = tockeV;

    if(indeksOroShop == 0){
        this.add.image(0,-50,'ananasP');
        this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
        prevBtnOro.visible = false;
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
        if(orV0 == 1){
            kupiOro.visible = false;
        } else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 1){
        this.add.image(0,-50,'bananaP');
         this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
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
        if(orV1 == 1){
            kupiOro.visible = false;
        }
    }
    if(indeksOroShop == 2){
        this.add.image(0,-50,'cesnjeP');
         this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
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
        if(orV2 == 1){
            kupiOro.visible = false;
        }
    }
    if(indeksOroShop == 3){
        this.add.image(0,-50,'grenivkaP');
         this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
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
        if(orV3 == 1){
            kupiOro.visible = false;
        }
    }
    if(indeksOroShop == 4){
        this.add.image(0,-50,'grozdjeP');
         this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
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
        if(orV4 == 1){
            kupiOro.visible = false;
        }
    }
    if(indeksOroShop == 5){
        this.add.image(0,-50,'hruskaP');
         this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
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
        if(orV5 == 1){
            kupiOro.visible = false;
        }
    }
    if(indeksOroShop == 6){
        this.add.image(0,-50,'jabolkoP');
         this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
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
        if(orV6 == 1){
            kupiOro.visible = false;
        }
    }
    if(indeksOroShop == 7){
        this.add.image(0,-50,'jagodaP');
         this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
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
        if(orV7 == 1){
            kupiOro.visible = false;
        }
    }
    if(indeksOroShop == 8){
        this.add.image(0,-50,'limonaP');
         this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
        nxtBtnOro.visible = true;
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
        if(orV8 == 1){
            kupiOro.visible = false;
        }
    }
    if(indeksOroShop == 9){
        this.add.image(0,-50,'lubenicaP');
         this.add.text(235, 398, '200', { fontSize: '32px', fill: '#000' });
        nxtBtnOro.visible = false;
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
        if(orV9 == 1){
            kupiOro.visible = false;
        }
    }

},

}
