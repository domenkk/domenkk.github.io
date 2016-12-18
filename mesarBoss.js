EnemyvegankaBoss = function(index, game, x, y, premik){

    this.vegankaBoss = game.add.sprite(x,y,'vegankaEn');
    this.vegankaBoss.scale.setTo(1);
    this.vegankaBoss.anchor.setTo(0.5);
    this.vegankaBoss.name = index.toString();
    game.physics.enable(this.vegankaBoss, Phaser.Physics.ARCADE);
    this.vegankaBoss.body.immovable = true;
    this.vegankaBoss.body.collideWorldBounds = true;
    this.vegankaBoss.allowGravity = true;


    // this.fireRate = 800;

    this.mesarTween = game.add.tween(this.vegankaBoss).to({
        x: this.vegankaBoss.x + premik
    }, 2500, 'Linear', true, 0, 100, true);
}

var enemyBoss;
var enemyBossKilled = false;


Game.MesarBoss = function(game){}

var bossMap;
var layerVB;

var mesar;
var controlsV = {};
var mesarSpeedBoss = 250;
var jumpTimer = 0;

var stKor = 0;
var indPobrKor = [];

var shootTime = 0;
var metki;

// var shootTimeEnemy = 0;
// var metekEnemy;

var levoV = false;


Game.MesarBoss.prototype = {

create: function(game){
  this.stage.backgroundColor = '#3e4dbc';
  this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
  this.backgroundSprite.fixedToCamera = true;

  this.physics.arcade.gravity.y = 1100;


  mapVB = this.add.tilemap('bossMmap',64,64);
  mapVB.addTilesetImage('tilesetVB');

  layerV = mapVB.createLayer(0);

  layerV.resizeWorld();

  mapVB.setCollisionBetween(0,2);
  mapVB.setTileIndexCallback(6, this.powerUp, this);
  mapVB.setTileIndexCallback(2, this.resetMesar, this);
  mapVB.setTileIndexCallback(5, this.konec, this);
  mapVB.setTileIndexCallback(3, this.resetMesar, this);


  mesar = this.add.sprite(100,500, 'mesar');
  mesar.anchor.setTo(0.5);
  mesar.scale.setTo(1.5);

  mesar.animations.add('idle', [0,1], 1, true );
  mesar.animations.add('jump', [2], 1, true );
  mesar.animations.add('run', [3,4,5,6,7,8], 7, true );
  this.physics.arcade.enable(mesar);

  this.camera.follow(mesar);
  mesar.body.collideWorldBounds = true;

  controlsV = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
      shoot: this.input.keyboard.addKey(Phaser.Keyboard.UP),
  };

//scoreText = game.add.text(10, 52, 'Score: 0', { fontSize: '32px', fill: '#000' });
//scoreText.fixedToCamera = true;

var lifeTxt = game.add.text(10, 8, 'Lives:', {fontSize: '32px', fill: '#000'});
lifeTxt.fixedToCamera = true;


    if (zivljenjaV == 5){
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

metki.setAll('scale.x', 0.8);
metki.setAll('scale.y', 0.8);

metki.setAll('outOfBoundsKill', true);
metki.setAll('checkWorldBounds', true);

enemyBoss = new EnemyvegankaBoss(0, game, 1050, 500, 1500);


},
update: function(game){

  this.physics.arcade.collide(mesar, layerV);
  this.physics.arcade.collide(enemyBoss.vegankaBoss, layerV);

  mesar.body.velocity.x = 0;

  if(controlsV.right.isDown){
    levoV = false;
    mesar.animations.play('run');
    mesar.scale.setTo(1.5);
    mesar.body.velocity.x += mesarSpeedBoss;
  }

  if(controlsV.left.isDown){
    levoV = true;
    mesar.animations.play('run');
    mesar.scale.setTo(-1.5,1.5);
    mesar.body.velocity.x -= mesarSpeedBoss;
  }

  if(controlsV.up.isDown && (mesar.body.onFloor() ||
      mesar.body.touching.down) && this.time.now > jumpTimer){
      mesar.body.velocity.y = -700;
      jumpTimer = this.time.now + 750;
      mesar.animations.play('jump');
  }

  if(mesar.body.velocity.x == 0 && mesar.body.velocity.y == 0){
    mesar.animations.play('idle');
  }

  if(controlsV.shoot.isDown){
    this.vstreliMetek();
  }

  if(zivljenjaV == 0){

    var meniGO = game.add.image(game.camera.x + 220, game.camera.y + 150, 'mnGO');
    mesar.kill();
     var btnB = game.add.button(game.camera.x + 320, game.camera.y + 350, 'bckGO', function(){
      this.state.start('MainMenu');
  }  , this, 2,1,0);


if(checkOverlap(mesar,enemyBoss.vegankaBoss)){
    this.resetMesar();
}

 if(checkOverlap(metki, enemyBoss.vegankaBoss)){
    enemyBoss.vegankaBoss.kill();
    enemyBossKilled = true;


}


}
},



resetMesar:function(){
  mesar.reset(100,500);


if(zivljenjaV == 5){
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
    tockeV += stKor;
}

},


  vstreliMetek:function(){
    if(this.time.now > shootTime){
      metek = metki.getFirstExists(false);
      if(metek){
        metek.reset(mesar.x, mesar.y);
        metek.lifespan = 2000;
        if(levoV){
          metek.body.velocity.x = -800;
        }
        else {
          metek.body.velocity.x = 800;
        }
        shootTime = this.time.now + 900;
      }
    }
  },

  powerUp: function(){
      if(mapVB.getTile(layerV.getTileX(mesar.x), layerV.getTileY(mesar.y), layerV, true).index != -1){

        mapVB.putTile(-1, layerV.getTileX(mesar.x), layerV.getTileY(mesar.y));

       mesarSpeedBoss += 80;

       this.time.events.add(Phaser.Timer.SECOND * 5, function (){
           mesarSpeedBoss -= 80;
       });
    }

  },

konec:function(){
  this.state.start('MainMenu');
},


} // konec


function checkOverlap(spriteA, spriteB){

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}
