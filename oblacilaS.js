Game.OblacilaS = function(game){};

var indeksOblShop = 0;
var nxtBtnObl;
var prevBtnObl;
var kupiObl;
var coinProd;
var premaloDenarja = false;

Game.OblacilaS.prototype = {

create: function(game){
  //this.stage.backgroundColor = '#3A5963';
   this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'shopBck');

this.add.image(0,0,'oblSid');


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

    nxtBtnObl = this.add.button(590, 280, 'naprS', function(){
        indeksOblShop++;
    }, this, 2,1,0 );

     prevBtnObl = this.add.button(100, 280, 'nazS', function(){
        indeksOblShop--;
    }, this, 2,1,0 );

    kupiObl = this.add.button(480, 410, 'kupiBtn', function(){

        if(tockeV < 500){
            premaloDenarja = true;
        }
        else {
          if(indeksOblShop == 0){
              oblV0 = 1;
          } else if(indeksOblShop == 1){
              oblV1 = 1;
          } else if(indeksOblShop == 2){
              oblV2 = 1;
          }else if(indeksOblShop == 3){
              oblV3 = 1;
          }else if(indeksOblShop == 4){
              oblV4 = 1;
          }else if(indeksOblShop == 5){
              oblV5 = 1;
          }else if(indeksOblShop == 6){
              oblV6 = 1;
          }else if(indeksOblShop == 7){
              oblV7 = 1;
          }else if(indeksOblShop == 8){
              oblV8 = 1;
          }else if(indeksOblShop == 9){
              oblV9 = 1;
          }else if(indeksOblShop == 10){
              oblV10 = 1;
          }else if(indeksOblShop == 11){
              oblV10 = 1;
          }

          obleka = indeksOblShop;
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

    if(indeksOblShop == 0){
        this.add.image(0,-50,'zelenoBlont');
        this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        prevBtnObl.visible = false;
        nxtBtnObl.visible = true;
        //kupiOro.visible = true;
        kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV0 == 1){
            kupiObl.visible = false;
        } else {
            kupiObl.visible = true;
        }
    }

    if(indeksOblShop == 1){
        this.add.image(0,-50,'zelenoRjavo');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV1 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 2){
        this.add.image(0,-50,'zelenoCrno');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV2 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 3){
        this.add.image(0,-50,'rjavoBlont');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV3 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 4){
        this.add.image(0,-50,'rjavoRjavo');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV4 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 5){
        this.add.image(0,-50,'rjavoCrno');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV5 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 6){
        this.add.image(0,-50,'modroBlont');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV6 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 7){
        this.add.image(0,-50,'modroRjavo');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV7 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 8){
        this.add.image(0,-50,'modroCrno');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV8 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 9){
        this.add.image(0,-50,'crnoBlont');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV9 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 10){
        this.add.image(0,-50,'crnoRjavo');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = true;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV10 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

    if(indeksOblShop == 11){
        this.add.image(0,-50,'crnoCrno');
         this.add.text(235, 398, '500', { fontSize: '32px', fill: '#000' });
        nxtBtnObl.visible = false;
        prevBtnObl.visible = true;
        kupiObl.visible = true;
         kupiObl.bringToTop();
        coinProd.bringToTop();
        if(premaloDenarja){
           var warn =  this.add.image(0,-50, 'warPD');
           var clo = this.add.button(500,230, 'izhNak', function(){
                warn.visible = false;
                clo.visible = false;
               premaloDenarja = false;
    }  , this, 2,1,0);
        }
        if(oblV11 == 1){
            kupiObl.visible = false;
        }else {
            kupiObl.visible = true;
        }
    } //konec indeksa

},

}
