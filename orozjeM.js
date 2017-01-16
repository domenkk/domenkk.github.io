Game.OrozjeM = function(game){};

var indeksOroShop = 0;
var nxtBtnOro;
var prevBtnOro;
var kupiOro;
var coinProd;
var premaloDenarja = false;

Game.OrozjeM.prototype = {

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
            orM0 = 1;
        } else if(indeksOroShop == 1){
            orM1 = 1;
        } else if(indeksOroShop == 2){
            orM2 = 1;
        }else if(indeksOroShop == 3){
            orM3 = 1;
        }else if(indeksOroShop == 4){
            orM4 = 1;
        }else if(indeksOroShop == 5){
            orM5 = 1;
        }else if(indeksOroShop == 6){
            orM6 = 1;
        }else if(indeksOroShop == 7){
            orM7 = 1;
        }else if(indeksOroShop == 8){
            orM8 = 1;
        }else if(indeksOroShop == 9){
            orM9 = 1;
        }
        orozjeMesar = indeksOroShop;
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
        this.add.image(0,-50,'bedraP');
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
        if(orM0 == 1){
            kupiOro.visible = false;
        } else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 1){
        this.add.image(0,-50,'cuftP');
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
        if(orM1 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 2){
        this.add.image(0,-50,'hamburgerP');
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
        if(orM2 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 3){
        this.add.image(0,-50,'klobasaP');
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
        if(orM3 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 4){
        this.add.image(0,-50,'kuraP');
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
        if(orM4 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 5){
        this.add.image(0,-50,'meso1P');
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
        if(orM5 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 6){
        this.add.image(0,-50,'mesoP');
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
        if(orM6 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 7){
        this.add.image(0,-50,'picaP');
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
        if(orM7 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 8){
        this.add.image(0,-50,'raznjicP');
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
        if(orM8 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }
    if(indeksOroShop == 9){
        this.add.image(0,-50,'salamaP');
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
        if(orM9 == 1){
            kupiOro.visible = false;
        }else {
            kupiOro.visible = true;
        }
    }

},

}
