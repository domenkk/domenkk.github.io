Game.VeganLevel1 = function(game){}

var mapV1;
var layerV;

var veganka;
var controlsV = {};
var vegankaSpeedLvl1 = 250;
var jumpTimer = 0;

var stKor = 0;
var indPobrKor = [];

var levoV = false;

var zivljenjaV = zivljenjaVeganka;
var life1;
var life2;
var life3;
var life4;
var life5;
var life6;
var life7;
var life8;
var life9;
var life10;


var pointsV = 0;

Game.VeganLevel1.prototype = {
preload:function(game){
    if(orozjeVeganka == 0){
        this.load.image('metekV', 'images_vegan/metkiV/ananas.png');
    } else if(orozjeVeganka == 1){
        this.load.image('metekV', 'images_vegan/metkiV/banana.png');
    } else if(orozjeVeganka == 2){
        this.load.image('metekV', 'images_vegan/metkiV/cesnje.png');
    } else if(orozjeVeganka == 3){
        this.load.image('metekV', 'images_vegan/metkiV/grapefruit.png');
    } else if(orozjeVeganka == 4){
        this.load.image('metekV', 'images_vegan/metkiV/grozdje.png');
    } else if(orozjeVeganka == 5){
        this.load.image('metekV', 'images_vegan/metkiV/hruska.png');
    } else if(orozjeVeganka == 6){
        this.load.image('metekV', 'images_vegan/metkiV/jabolko.png');
    } else if(orozjeVeganka == 7){
        this.load.image('metekV', 'images_vegan/metkiV/jagoda.png');
    } else if(orozjeVeganka == 8){
        this.load.image('metekV', 'images_vegan/metkiV/limona.png');
    } else if(orozjeVeganka == 9){
        this.load.image('metekV', 'images_vegan/metkiV/lubenica.png');
    }

    if(okolje == 0){
        this.load.image('tilesetV', 'images_vegan/WinterTilesV.png');
    } else if(okolje == 1){
        this.load.image('tilesetV', 'images_vegan/AutumnTilesV.png');
    }

    if(obleka == 0){
      this.load.spritesheet('veganka', 'images_shop/zb.png', 24, 26);
    } else if(obleka == 1){
      this.load.spritesheet('veganka', 'images_shop/zr.png', 24, 26);
    } else if(obleka == 2){
      this.load.spritesheet('veganka', 'images_shop/zc.png', 24, 26);
    } else if(obleka == 3){
      this.load.spritesheet('veganka', 'images_shop/rb.png', 24, 26);
    } else if(obleka == 4){
      this.load.spritesheet('veganka', 'images_shop/rr.png', 24, 26);
    } else if(obleka == 5){
      this.load.spritesheet('veganka', 'images_shop/rc.png', 24, 26);
    } else if(obleka == 6){
      this.load.spritesheet('veganka', 'images_shop/mb.png', 24, 26);
    } else if(obleka == 7){
      this.load.spritesheet('veganka', 'images_shop/mr.png', 24, 26);
    } else if(obleka == 8){
      this.load.spritesheet('veganka', 'images_shop/mc.png', 24, 26);
    } else if(obleka == 9){
      this.load.spritesheet('veganka', 'images_shop/cb.png', 24, 26);
    } else if(obleka == 10){
      this.load.spritesheet('veganka', 'images_shop/cr.png', 24, 26);
    } else if(obleka == 11){
      this.load.spritesheet('veganka', 'images_shop/cc.png', 24, 26);
    }

},


create: function(game){
        console.log(orV0);
    console.log(orozjeVeganka);
      console.log(zivljenjaVeganka);

  glasbaV1 = this.add.audio("gameSong");
  glasbaV1.play('', 0, 1, true);

  skok = this.add.audio("skok");
  hrana = this.add.audio("jabolko");


  this.stage.backgroundColor = '#3e4dbc';
  this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
  this.backgroundSprite.fixedToCamera = true;

  //this.physics.arcade.gravity.y = 1100;
  this.physics.arcade.gravity.y = 0;


  zivljenjaV = zivljenjaVeganka;

  mapV1 = this.add.tilemap('mapV1',64,64);
  mapV1.addTilesetImage('tilesetV');

  layerV = mapV1.createLayer(0);

  layerV.resizeWorld();

  mapV1.setCollisionBetween(0,2);

  mapV1.setTileIndexCallback(2, this.resetVegan,this);

  mapV1.setTileIndexCallback(3, this.getKorencek,this);

  mapV1.setTileIndexCallback(5, this.prehodLvl2, this);

  veganka = this.add.sprite(100,300, 'veganka');
  veganka.anchor.setTo(0.5,0.5);
  veganka.scale.setTo(1.5,1.5);
  veganka.animations.add('idle', [0,1], 1, true );
  veganka.animations.add('jump', [2], 1, true );
  veganka.animations.add('run', [3,4,5,6,7,8], 7, true );
  this.physics.arcade.enable(veganka);
  veganka.body.gravity.y = 1100;
  this.camera.follow(veganka);
  veganka.body.collideWorldBounds = true;

  controlsV = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
  };

scoreText = game.add.text(10, 52, 'Score: 0', { fontSize: '32px', fill: '#000' });
scoreText.fixedToCamera = true;

var lifeTxt = game.add.text(10, 8, 'Lives:', {fontSize: '32px', fill: '#000'});
lifeTxt.fixedToCamera = true;

life1 = game.add.image(100, 0, 'srcek');
life2 = game.add.image(130, 0, 'srcek');
life3 = game.add.image(160, 0, 'srcek');
life4 = game.add.image(190, 0, 'srcek');
life5 = game.add.image(220, 0, 'srcek');

life1.fixedToCamera = true;
life2.fixedToCamera = true;
life3.fixedToCamera = true;
life4.fixedToCamera = true;
life5.fixedToCamera = true;

if(zivljenjaV == 6){
    life6 = game.add.image(250, 0, 'srcek');
    life6.fixedToCamera = true;
} else if(zivljenjaV == 7){
    life6 = game.add.image(250, 0, 'srcek');
    life6.fixedToCamera = true;
    life7 = game.add.image(280, 0, 'srcek');
    life7.fixedToCamera = true;
} else if(zivljenjaV == 8){
    life6 = game.add.image(250, 0, 'srcek');
    life6.fixedToCamera = true;
    life7 = game.add.image(280, 0, 'srcek');
    life7.fixedToCamera = true;
    life8 = game.add.image(310, 0, 'srcek');
    life8.fixedToCamera = true;
} else if(zivljenjaV == 9){
    life6 = game.add.image(250, 0, 'srcek');
    life6.fixedToCamera = true;
    life7 = game.add.image(280, 0, 'srcek');
    life7.fixedToCamera = true;
    life8 = game.add.image(310, 0, 'srcek');
    life8.fixedToCamera = true;
    life9 = game.add.image(340, 0, 'srcek');
    life9.fixedToCamera = true;
} else if(zivljenjaV == 10){
    life6 = game.add.image(250, 0, 'srcek');
    life6.fixedToCamera = true;
    life7 = game.add.image(280, 0, 'srcek');
    life7.fixedToCamera = true;
    life8 = game.add.image(310, 0, 'srcek');
    life8.fixedToCamera = true;
    life9 = game.add.image(340, 0, 'srcek');
    life9.fixedToCamera = true;
    life10 = game.add.image(370, 0, 'srcek');
    life10.fixedToCamera = true;
}

},
update: function(game){



  this.physics.arcade.collide(veganka, layerV);

  veganka.body.velocity.x = 0;

  if(controlsV.right.isDown){
    levoV = false;
    veganka.animations.play('run');
    veganka.scale.setTo(1.5,1.5);
    veganka.body.velocity.x += vegankaSpeedLvl1;
  }

  if(controlsV.left.isDown){
    levoV = true;
    veganka.animations.play('run');
    veganka.scale.setTo(-1.5,1.5);
    veganka.body.velocity.x -= vegankaSpeedLvl1;
  }

  if(controlsV.up.isDown && (veganka.body.onFloor() ||
      veganka.body.touching.down) && this.time.now > jumpTimer){
      veganka.body.velocity.y = -700;
      jumpTimer = this.time.now + 750;
      veganka.animations.play('jump');
      skok.play();
  }

  if(veganka.body.velocity.x == 0 && veganka.body.velocity.y == 0){
      veganka.animations.play('idle');

  }

if(veganka.body.velocity.x == 0 && veganka.body.velocity.y == 0){
      veganka.animations.play('idle');

  }


if(zivljenjaV == 0){

    var meniGO = game.add.image(game.camera.x + 220, game.camera.y + 150, 'mnGO');
    veganka.kill();
     var btnB = game.add.button(game.camera.x + 320, game.camera.y + 350, 'bckGO', function(){
       glasbaV1.stop();
      this.state.start('MainMenu');
  }  , this, 2,1,0);
    var scoreTextGO = game.add.text(game.camera.x + 410,  game.camera.y + 265, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });
    scoreTextGO.text = tockeV;
}


},

resetVegan:function(){
  veganka.reset(100,300);
  for(i = 0; i < stKor; i++){
    mapV1.putTile(3, indPobrKor[i].x, indPobrKor[i].y);
    console.log( stKor + " " + i + " k " + indPobrKor[i].x + " " + indPobrKor[i].y);
  }

if(zivljenjaV == 10){
    life10.visible = false;
    zivljenjaV-=1;
} else if(zivljenjaV == 9){
    life9.visible = false;
    zivljenjaV-=1;
} else if(zivljenjaV == 8){
    life8.visible = false;
    zivljenjaV-=1;
} else if(zivljenjaV == 7){
    life7.visible = false;
    zivljenjaV-=1;
} else if(zivljenjaV == 6){
    life6.visible = false;
    zivljenjaV-=1;
} else if(zivljenjaV == 5){
    life5.visible = false;
    zivljenjaV-=1;
} else if (zivljenjaV == 4){
    life4.visible = false;
    zivljenjaV-=1;
} else if (zivljenjaV == 3){
    life3.visible = false;
    zivljenjaV-=1;
} else if (zivljenjaV == 2){
    life2.visible = false;
    zivljenjaV-=1;
} else if (zivljenjaV == 1){
    life1.visible = false;
    zivljenjaV-=1;
    tockeV += pointsV;
}
    pointsV = 0;
  stKor = 0;
  scoreText.text = 'Score: ' + stKor;
  console.log(stKor);
},

getKorencek:function(){
  if(mapV1.getTile(layerV.getTileX(veganka.x), layerV.getTileY(veganka.y), layerV, true).index != -1){
    stKor++;
    pointsV= stKor*20;
    var koorPobrKor = {};
    koorPobrKor.x = layerV.getTileX(veganka.x);
    koorPobrKor.y = layerV.getTileY(veganka.y);
    indPobrKor[stKor-1] = koorPobrKor;
      console.log(stKor + "  " + indPobrKor[stKor-1].x + " " + indPobrKor[stKor-1].y);
      scoreText.text = 'Score: ' + pointsV;
      mapV1.putTile(-1, layerV.getTileX(veganka.x), layerV.getTileY(veganka.y));

      hrana.play();
  }

  //stKor++;

},


prehodLvl2:function(){
  glasbaV1.stop();
  this.state.start('VeganLevel2');
  tockeV+=pointsV;
},




}
