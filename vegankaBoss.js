EnemyMesarBoss = function(index, game, x, y, premik){

    this.mesarBoss = game.add.sprite(x,y,'mesarEn');
    this.mesarBoss.scale.setTo(0.5);
    this.mesarBoss.anchor.setTo(0.5);
    this.mesarBoss.name = index.toString();
    game.physics.enable(this.mesarBoss, Phaser.Physics.ARCADE);
    this.mesarBoss.body.immovable = true;
    this.mesarBoss.body.collideWorldBounds = true;
    this.mesarBoss.allowGravity = true;

    this.mesarTween = game.add.tween(this.mesarBoss).to({
        x: this.mesarBoss.x + premik
    }, 2500, 'Linear', true, 0, 100, true);
}

var enemyBoss;
var enemyBossKilled = false;


Game.VeganBoss = function(game){}

var bossMap;
var layerVBB;

var veganka;
var controlsV = {};
var vegankaSpeedBoss = 250;
var jumpTimer = 0;

var shootTime = 0;
var metki;
var izstreljenMetek;

var levoV = false;

var zivljenjaVM = 5;
var life1M;
var life2M;
var life3M;
var life4M;
var life5M;


Game.VeganBoss.prototype = {

create: function(game){

  glasbaVBoss = this.add.audio("bossSong");
  glasbaVBoss.play('', 0, 1, true);

  skokB = this.add.audio("skok");
  strelB = this.add.audio("strel");
  powerB = this.add.audio("power");

  this.stage.backgroundColor = '#3e4dbc';
  this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
  this.backgroundSprite.fixedToCamera = true;

  this.physics.arcade.gravity.y = 1100;


  mapVB = this.add.tilemap('bossVmap',64,64);
  mapVB.addTilesetImage('tilesetVB');

  layerVB = mapVB.createLayer(0);

  layerVB.resizeWorld();

  mapVB.setCollisionBetween(0,2);
  mapVB.setTileIndexCallback(2, this.powerUp, this);
  mapVB.setTileIndexCallback(3, this.konec, this);


  veganka = this.add.sprite(100,800, 'veganka');
  veganka.anchor.setTo(0.5);
  veganka.scale.setTo(1.5);

  veganka.animations.add('idle', [0,1], 1, true );
  veganka.animations.add('jump', [2], 1, true );
  veganka.animations.add('run', [3,4,5,6,7,8], 7, true );
  this.physics.arcade.enable(veganka);

  this.camera.follow(veganka);
  veganka.body.collideWorldBounds = true;

  controlsV = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
      shoot: this.input.keyboard.addKey(Phaser.Keyboard.E),
  };


var lifeTxt = game.add.text(10, 8, 'Lives:', {fontSize: '32px', fill: '#000'});
lifeTxt.fixedToCamera = true;
var lifeTxtM = game.add.text(10, 68, 'Mesar:', {fontSize: '32px', fill: '#000'});
lifeTxtM.fixedToCamera = true;

if (zivljenjaV == 10){
life1 = game.add.image(100, 0, 'srcek');
life2 = game.add.image(130, 0, 'srcek');
life3 = game.add.image(160, 0, 'srcek');
life4 = game.add.image(190, 0, 'srcek');
life5 = game.add.image(220, 0, 'srcek');
life6 = game.add.image(250, 0, 'srcek');
life7 = game.add.image(280, 0, 'srcek');
life8 = game.add.image(310, 0, 'srcek');
life9 = game.add.image(340, 0, 'srcek');
life10 = game.add.image(370, 0, 'srcek');
life1.fixedToCamera = true;
life2.fixedToCamera = true;
life3.fixedToCamera = true;
life4.fixedToCamera = true;
life5.fixedToCamera = true;
life6.fixedToCamera = true;
life7.fixedToCamera = true;
life8.fixedToCamera = true;
life9.fixedToCamera = true;
life10.fixedToCamera = true;
} else if (zivljenjaV == 9){
life1 = game.add.image(100, 0, 'srcek');
life2 = game.add.image(130, 0, 'srcek');
life3 = game.add.image(160, 0, 'srcek');
life4 = game.add.image(190, 0, 'srcek');
life5 = game.add.image(220, 0, 'srcek');
life6 = game.add.image(250, 0, 'srcek');
life7 = game.add.image(280, 0, 'srcek');
life8 = game.add.image(310, 0, 'srcek');
life9 = game.add.image(340, 0, 'srcek');
life1.fixedToCamera = true;
life2.fixedToCamera = true;
life3.fixedToCamera = true;
life4.fixedToCamera = true;
life5.fixedToCamera = true;
life6.fixedToCamera = true;
life7.fixedToCamera = true;
life8.fixedToCamera = true;
life9.fixedToCamera = true;
} else if (zivljenjaV == 8){
life1 = game.add.image(100, 0, 'srcek');
life2 = game.add.image(130, 0, 'srcek');
life3 = game.add.image(160, 0, 'srcek');
life4 = game.add.image(190, 0, 'srcek');
life5 = game.add.image(220, 0, 'srcek');
life6 = game.add.image(250, 0, 'srcek');
life7 = game.add.image(280, 0, 'srcek');
life8 = game.add.image(310, 0, 'srcek');
life1.fixedToCamera = true;
life2.fixedToCamera = true;
life3.fixedToCamera = true;
life4.fixedToCamera = true;
life5.fixedToCamera = true;
life6.fixedToCamera = true;
life7.fixedToCamera = true;
life8.fixedToCamera = true;
} else if (zivljenjaV == 7){
life1 = game.add.image(100, 0, 'srcek');
life2 = game.add.image(130, 0, 'srcek');
life3 = game.add.image(160, 0, 'srcek');
life4 = game.add.image(190, 0, 'srcek');
life5 = game.add.image(220, 0, 'srcek');
life6 = game.add.image(250, 0, 'srcek');
life7 = game.add.image(280, 0, 'srcek');
life1.fixedToCamera = true;
life2.fixedToCamera = true;
life3.fixedToCamera = true;
life4.fixedToCamera = true;
life5.fixedToCamera = true;
life6.fixedToCamera = true;
life7.fixedToCamera = true;
} else if (zivljenjaV == 6){
life1 = game.add.image(100, 0, 'srcek');
life2 = game.add.image(130, 0, 'srcek');
life3 = game.add.image(160, 0, 'srcek');
life4 = game.add.image(190, 0, 'srcek');
life5 = game.add.image(220, 0, 'srcek');
life6 = game.add.image(250, 0, 'srcek');
life1.fixedToCamera = true;
life2.fixedToCamera = true;
life3.fixedToCamera = true;
life4.fixedToCamera = true;
life5.fixedToCamera = true;
life6.fixedToCamera = true;
} else if (zivljenjaV == 5){
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
} else if (zivljenjaV == 4){
life1 = game.add.image(100, 0, 'srcek');
life2 = game.add.image(130, 0, 'srcek');
life3 = game.add.image(160, 0, 'srcek');
life4 = game.add.image(190, 0, 'srcek');
life1.fixedToCamera = true;
life2.fixedToCamera = true;
life3.fixedToCamera = true;
life4.fixedToCamera = true;
} else if (zivljenjaV == 3){
life1 = game.add.image(100, 0, 'srcek');
life2 = game.add.image(130, 0, 'srcek');
life3 = game.add.image(160, 0, 'srcek');
life1.fixedToCamera = true;
life2.fixedToCamera = true;
life3.fixedToCamera = true;
} else if (zivljenjaV == 2){
life1 = game.add.image(100, 0, 'srcek');
life2 = game.add.image(130, 0, 'srcek');
life1.fixedToCamera = true;
life2.fixedToCamera = true;
} else if (zivljenjaV == 1){
life1 = game.add.image(100, 0, 'srcek');
life1.fixedToCamera = true;
}


if (zivljenjaVM == 5){
  life1M = game.add.image(120, 60, 'srcek');
  life2M = game.add.image(150, 60, 'srcek');
  life3M = game.add.image(180, 60, 'srcek');
  life4M = game.add.image(210, 60, 'srcek');
  life5M = game.add.image(240, 60, 'srcek');
  life1M.fixedToCamera = true;
  life2M.fixedToCamera = true;
  life3M.fixedToCamera = true;
  life4M.fixedToCamera = true;
  life5M.fixedToCamera = true;
} else if (zivljenjaVM == 4){
  life1M = game.add.image(120, 60, 'srcek');
  life2M = game.add.image(150, 60, 'srcek');
  life3M = game.add.image(180, 60, 'srcek');
  life4M = game.add.image(210, 60, 'srcek');
  life1M.fixedToCamera = true;
  life2M.fixedToCamera = true;
  life3M.fixedToCamera = true;
  life4M.fixedToCamera = true;
} else if (zivljenjaVM == 3){
  life1M = game.add.image(120, 60, 'srcek');
  life2M = game.add.image(150, 60, 'srcek');
  life3M = game.add.image(180, 60, 'srcek');
  life1M.fixedToCamera = true;
  life2M.fixedToCamera = true;
  life3M.fixedToCamera = true;
} else if (zivljenjaVM == 2){
  life1M = game.add.image(120, 60, 'srcek');
  life2M = game.add.image(150, 60, 'srcek');
  life1M.fixedToCamera = true;
  life2M.fixedToCamera = true;
} else if (zivljenjaVM == 1){
  life1M = game.add.image(120, 60, 'srcek');
  life1M.fixedToCamera = true;
}


metki = game.add.group();
metki.enableBody = true;
metki.physicsBodyType = Phaser.Physics.ARCADE;
metki.createMultiple(500, 'metekV');
metki.setAll('anchor.x', 0.5);
metki.setAll('anchor.y', 0.5);
metki.setAll('scale.x', 2.5);
metki.setAll('scale.y', 2.5);
metki.setAll('outOfBoundsKill', true);
metki.setAll('checkWorldBounds', true);

enemyBoss = new EnemyMesarBoss(0, game, 1216, 768, 960);
// metkiEnemy = game.add.group();
// metkiEnemy.enableBody = true;
// metkiEnemy.physicsBodyType = Phaser.Physics.ARCADE;
// metkiEnemy.createMultiple(5, 'metekEnemy');
// metkiEnemy.setAll('anchor.x', 0.5);
// metkiEnemy.setAll('anchor.y', 0.5);
//
// metkiEnemy.setAll('scale.x', 2.5);
// metkiEnemy.setAll('scale.y', 2.5);
//
// metkiEnemy.setAll('outOfBoundsKill', true);
// metkiEnemy.setAll('checkWorldBounds', true);
//
// if(this.physics.arcade.distanceBetween(enemyBoss, veganka) < 300){
//   this.nextFire = this.time.now + EnemyMesarBoss.fireRate;
//   metkiEnemy.rotation = this.physics.arcade.moveToObject(metkiEnemy, veganka, 500);
// }

},
update: function(game){

  this.physics.arcade.collide(veganka, layerVB);
  this.physics.arcade.collide(enemyBoss.mesarBoss, layerVB);

  veganka.body.velocity.x = 0;


  if(checkOverlapVM(veganka, enemyBoss.mesarBoss)){
      this.resetVegan();
  }

   if(checkOverlapVM(metki, enemyBoss.mesarBoss)){
     if(enemyBossKilled == false){
      izstreljenMetek.kill();
    }
       if(zivljenjaVM == 5){
           life5M.visible = false;
           zivljenjaVM-=1;
       } else if (zivljenjaVM == 4){
           life4M.visible = false;
           zivljenjaVM-=1;
       } else if (zivljenjaVM == 3){
           life3M.visible = false;
           zivljenjaVM-=1;
       } else if (zivljenjaVM == 2){
           life2M.visible = false;
           zivljenjaVM-=1;
       } else if (zivljenjaVM == 1){
           life1M.visible = false;
           zivljenjaVM-=1;
           enemyBossKilled = true;
       }

  }

  if(enemyBossKilled == true){
    enemyBoss.mesarBoss.kill();
  }


  if(controlsV.right.isDown){
    levoV = false;
    veganka.animations.play('run');
    veganka.scale.setTo(1.5);
    veganka.body.velocity.x += vegankaSpeedBoss;
  }

  if(controlsV.left.isDown){
    levoV = true;
    veganka.animations.play('run');
    veganka.scale.setTo(-1.5,1.5);
    veganka.body.velocity.x -= vegankaSpeedBoss;
  }

  if(controlsV.up.isDown && (veganka.body.onFloor() ||
      veganka.body.touching.down) && this.time.now > jumpTimer){
      veganka.body.velocity.y = -700;
      jumpTimer = this.time.now + 750;
      veganka.animations.play('jump');

      skokB.play();
  }

  if(veganka.body.velocity.x == 0 && veganka.body.velocity.y == 0){
    veganka.animations.play('idle');
  }

  if(controlsV.shoot.isDown){
    this.vstreliMetek();
  }

  if(zivljenjaV == 0){
    var meniGO = game.add.image(game.camera.x + 220, game.camera.y + 150, 'mnGO');
    veganka.kill();
     var btnB = game.add.button(game.camera.x + 320, game.camera.y + 350, 'bckGO', function(){
       glasbaVBoss.stop();
      this.state.start('MainMenu');
  }  , this, 2,1,0);

}


}, //konc updajta

resetVegan:function(){
  veganka.reset(100,800);

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
    tockeV += stKor4;
}

},


  vstreliMetek:function(){
    if(this.time.now > shootTime){
      metek = metki.getFirstExists(false);
      if(metek){
        metek.reset(veganka.x, veganka.y);
        metek.lifespan = 2000;
        if(levoV){
          metek.body.velocity.x = -600;
        }
        else {
          metek.body.velocity.x = 600;
        }
        shootTime = this.time.now + 900;
      }
      izstreljenMetek = metek;

      strelB.play();
    }
  },

  powerUp: function(){
      if(mapVB.getTile(layerVB.getTileX(veganka.x), layerVB.getTileY(veganka.y), layerVB, true).index != -1){

        mapVB.putTile(-1, layerVB.getTileX(veganka.x), layerVB.getTileY(veganka.y));

       vegankaSpeedBoss += 80;

       this.time.events.add(Phaser.Timer.SECOND * 5, function (){
           vegankaSpeedBoss -= 80;
       });
       powerB.play();
    }
  },

konec:function(){
  if(enemyBossKilled == true){
    this.state.start('MainMenu');
    glasbaVBoss.stop();
  }
},
} // konec


function checkOverlapVM(spriteA, spriteB){

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(boundsA, boundsB);
}
