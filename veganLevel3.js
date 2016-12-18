EnemyMesar = function(index, game, x, y, premik){

    this.mesar = game.add.sprite(x,y,'mesarEn');
    this.mesar.scale.setTo(0.5);
    this.mesar.anchor.setTo(0.5);
    this.mesar.name = index.toString();
    game.physics.enable(this.mesar, Phaser.Physics.ARCADE);
    this.mesar.body.immovable = true;
    this.mesar.body.collideWorldBounds = true;

    this.mesarTween = game.add.tween(this.mesar).to({
        x: this.mesar.x + premik
    }, 2000, 'Linear', true, 0, 100, true);
}

var enemyM4;


Game.VeganLevel3 = function(game){}

var mapV3;
var layerV3;

var veganka;
var controlsV = {};
var vegankaSpeed = 250;
var jumpTimer = 0;

var stKor3 = 0;
var indPobrKor = [];

var shootTime = 0;
var metki;

var levoV = false;


Game.VeganLevel3.prototype = {

create: function(game){
    pointsV = 0;

  glasbaV3 = this.add.audio("gameSong");
  glasbaV3.play('', 0, 1, true);

  skok3 = this.add.audio("skok");
  hrana3 = this.add.audio("jabolko");
  strel3 = this.add.audio("strel");

  this.stage.backgroundColor = '#3e4dbc';
  this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
  this.backgroundSprite.fixedToCamera = true;

  this.physics.arcade.gravity.y = 1100;


  mapV3 = this.add.tilemap('mapV3',64,64);
  mapV3.addTilesetImage('tilesetV');

  layerV3 = mapV3.createLayer(0);

  layerV3.resizeWorld();

  mapV3.setCollisionBetween(0,2);

  mapV3.setTileIndexCallback(2, this.resetVegan,this);

  mapV3.setTileIndexCallback(3, this.getKorencek,this);

 mapV3.setTileIndexCallback(5, this.prehodLvl4, this);

  veganka = this.add.sprite(100,800, 'veganka');
  veganka.anchor.setTo(0.5,0.5);
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

scoreText = game.add.text(10, 52, 'Score: 0', { fontSize: '32px', fill: '#000' });
scoreText.fixedToCamera = true;

var lifeTxt = game.add.text(10, 8, 'Lives:', {fontSize: '32px', fill: '#000'});
lifeTxt.fixedToCamera = true;

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

metki = game.add.group();
metki.enableBody = true;
metki.physicsBodyType = Phaser.Physics.ARCADE;
metki.createMultiple(5, 'metekV');
metki.setAll('anchor.x', 0.5);
metki.setAll('anchor.y', 0.5);

metki.setAll('scale.x', 2.5);
metki.setAll('scale.y', 2.5);

metki.setAll('outOfBoundsKill', true);
metki.setAll('checkWorldBounds', true);

  enemyM4 = new EnemyMesar(0, game, 3648, 832, 512);

},
update: function(game){

  this.physics.arcade.collide(veganka, layerV3);
  this.physics.arcade.collide(enemyM4.mesar, layerV3);

  veganka.body.velocity.x = 0;

  if(controlsV.right.isDown){
    levoV = false;
    veganka.animations.play('run');
    veganka.scale.setTo(1.5,1.5);
    veganka.body.velocity.x += vegankaSpeed;
  }

  if(controlsV.left.isDown){
    levoV = true;
    veganka.animations.play('run');
    veganka.scale.setTo(-1.5,1.5);
    veganka.body.velocity.x -= vegankaSpeed;
  }

  if(controlsV.up.isDown && (veganka.body.onFloor() ||
      veganka.body.touching.down) && this.time.now > jumpTimer){
      veganka.body.velocity.y = -700;
      jumpTimer = this.time.now + 750;
      veganka.animations.play('jump');
      skok3.play();
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
      this.state.start('MainMenu');
      glasbaV3.stop();
  }  , this, 2,1,0);
    var scoreTextGO = game.add.text(game.camera.x + 410,  game.camera.y + 265, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });
    scoreTextGO.text = tockeV;
}

if(checkOverlapVM(veganka,enemyM4.mesar)){
    this.resetVegan();
}

 if(checkOverlapVM(metki, enemyM4.mesar)){
    enemyM4.mesar.kill();
     enemyM4Killed = true;
}


},

resetVegan:function(){
  veganka.reset(100,800);
  for(i = 0; i < stKor3; i++){
    mapV3.putTile(3, indPobrKor[i].x, indPobrKor[i].y);
    console.log( stKor3 + " " + i + " k " + indPobrKor[i].x + " " + indPobrKor[i].y);
  }

 console.log("tocke" + tockeV);

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
     stKor3 = 0;
    pointsV = 0;
  scoreText.text = 'Score: ' + stKor3;
  console.log(stKor3);
},

getKorencek:function(){
  if(mapV3.getTile(layerV3.getTileX(veganka.x), layerV3.getTileY(veganka.y), layerV3, true).index != -1){
    stKor3++;
      pointsV = stKor3*20;
    var koorPobrKor = {};
    koorPobrKor.x = layerV3.getTileX(veganka.x);
    koorPobrKor.y = layerV3.getTileY(veganka.y);
    indPobrKor[stKor3-1] = koorPobrKor;
      console.log(stKor3 + "  " + indPobrKor[stKor3-1].x + " " + indPobrKor[stKor3-1].y);
      scoreText.text = 'Score: ' + pointsV;
      mapV3.putTile(-1, layerV3.getTileX(veganka.x), layerV3.getTileY(veganka.y));

      hrana3.play();
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
      strel3.play();
    }
  },

prehodLvl4:function(){
  this.state.start('VeganLevel4');
    tockeV+=pointsV;
    glasbaV3.stop();
},


} // konec


function checkOverlapVM(spriteA, spriteB){

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}
