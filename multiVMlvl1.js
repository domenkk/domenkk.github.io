Game.MultiVMlvl1 = function(game){}

var mapMVlvl1;
var layerMV;

var veganka;
var controlsV = {};
var mesar;
var controlsM = {};
var vegankaSpeedMVlvl1 = 100;
var mesarSpeedMVlvl1 = 100;
var jumpTimerV = 0;
var jumpTimerM = 0;

var shootTimeV = 0;
var metkiV;

var shootTimeM = 0;
var metkiM;

var levoV = true;
var levoM = true;
var zmagaV = false;
var zmagaM = false;

var zmageVegan = 0;
var zmageMesar = 0;



Game.MultiVMlvl1.prototype = {

create: function(game){
    zmageVegan = 0;
    zmageMesar = 0;
  this.stage.backgroundColor = '#FFF';
  this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 400, 'background');
  this.backgroundSprite.fixedToCamera = true;

  this.physics.arcade.gravity.y = 2500;

  mapMVlvl1 = this.add.tilemap('mapMVlvl1', 25, 25);
  mapMVlvl1.addTilesetImage('tilesetMV');

  layerMV = mapMVlvl1.createLayer(0);

  layerMV.resizeWorld();

  mapMVlvl1.setCollisionBetween(0,1);

  veganka = this.add.sprite(50,300, 'veganka');
  veganka.anchor.setTo(0.5);
  veganka.scale.setTo(0.5);

  veganka.animations.add('idle', [0,1], 1, true );
  veganka.animations.add('jump', [2], 1, true );
  veganka.animations.add('run', [3,4,5,6,7,8], 7, true );
  this.physics.arcade.enable(veganka);

  mesar = this.add.sprite(750,300, 'mesar');
  mesar.anchor.setTo(0.5);
  mesar.scale.setTo(0.5);

  mesar.animations.add('idle', [0,1], 1, true );
  mesar.animations.add('jump', [2], 1, true );
  mesar.animations.add('run', [3,4,5,6], 5, true );
  this.physics.arcade.enable(mesar);

  this.camera.focusOnXY(400, 200);
  veganka.body.collideWorldBounds = true;
  mesar.body.collideWorldBounds = true;

  metkiV = game.add.group();
  metkiV.enableBody = true;
  metkiV.physicsBodyType = Phaser.Physics.ARCADE;
  metkiV.createMultiple(5, 'metekV');
  metkiV.setAll('anchor.x', 0.5);
  metkiV.setAll('anchor.y', 0.5);

  metkiV.setAll('scale.x', 0.5);
  metkiV.setAll('scale.y', 0.5);

  metkiV.setAll('outOfBoundsKill', true);
  metkiV.setAll('checkWorldBounds', true);

  metkiM = game.add.group();
  metkiM.enableBody = true;
  metkiM.physicsBodyType = Phaser.Physics.ARCADE;
  metkiM.createMultiple(5, 'metekM');
  metkiM.setAll('anchor.x', 0.1);
  metkiM.setAll('anchor.y', 0.1);

  metkiM.setAll('scale.x', 0.5);
  metkiM.setAll('scale.y', 0.5);

  metkiM.setAll('outOfBoundsKill', true);
  metkiM.setAll('checkWorldBounds', true);


  controlsV = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
      shoot: this.input.keyboard.addKey(Phaser.Keyboard.F)
  };

  controlsM = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
      left: this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
      up: this.input.keyboard.addKey(Phaser.Keyboard.UP),
      shoot: this.input.keyboard.addKey(Phaser.Keyboard.L)
  };

zmagaV = false;
zmagaM = false;

scoreTextV = game.add.text(108, 2, 'Vegan: 0', { fontSize: '20px', fill: '#000' });
scoreTextV.fixedToCamera = true;

scoreTextM = game.add.text(610, 2, 'Mesar: 0', { fontSize: '20px', fill: '#000' });
scoreTextM.fixedToCamera = true;
    
    
},
update: function(game){

  this.physics.arcade.collide(veganka, layerMV);
  this.physics.arcade.collide(mesar, layerMV);

    scoreTextV.text = 'Vegan: ' + zmageVegan;
    scoreTextM.text = 'Mesar: ' + zmageMesar;
    
    
  veganka.body.velocity.x = 0;
  mesar.body.velocity.x = 0;

  if(controlsV.right.isDown){
    veganka.animations.play('run');
    levoV = false;
    veganka.scale.setTo(0.5);
    veganka.body.velocity.x += vegankaSpeedMVlvl1;
  }

  if(controlsV.left.isDown){
    veganka.animations.play('run');
    levoV = true;
    veganka.scale.setTo(-0.5, 0.5);
    veganka.body.velocity.x -= vegankaSpeedMVlvl1;
  }

  if(controlsV.up.isDown && (veganka.body.onFloor() ||
      veganka.body.touching.down) && this.time.now > jumpTimerV){
      veganka.body.velocity.y = -700;
      jumpTimerV = this.time.now + 700;
      veganka.animations.play('jump');
  }

  if(veganka.body.velocity.x == 0 && veganka.body.velocity.y == 0){
    veganka.animations.play('idle');
  }

  if(controlsV.shoot.isDown){
      this.vstreliV();
  }

  if(controlsM.right.isDown){
    mesar.animations.play('run');
    levoM = false;
    mesar.scale.setTo(0.5);
    mesar.body.velocity.x += mesarSpeedMVlvl1;
  }

  if(controlsM.left.isDown){
    mesar.animations.play('run');
    levoM = true;
    mesar.scale.setTo(-0.5, 0.5);
    mesar.body.velocity.x -= mesarSpeedMVlvl1;
  }

  if(controlsM.up.isDown && (mesar.body.onFloor() ||
      mesar.body.touching.down) && this.time.now > jumpTimerM){
      mesar.body.velocity.y = -700;
      jumpTimerM = this.time.now + 700;
      mesar.animations.play('jump');
  }

  if(mesar.body.velocity.x == 0 && mesar.body.velocity.y == 0){
    mesar.animations.play('idle');
  }

  if(controlsM.shoot.isDown){
      this.vstreliM();
  }

  if(checkOverlapVM(metkiV, mesar)){
      mesar.kill();
      zmagaV = true;
 }

 if(checkOverlapVM(metkiM, veganka)){
    veganka.kill();
     zmagaM = true;
}


if(zmagaV){
    if(zmageVegan == 0){
    zmageVegan++;
        }
     var zmagaVMeni = game.add.image(game.world.centerX, game.world.centerY, 'vegWinM');
     zmagaVMeni.anchor.setTo(0.5,0.5);
     var gumbMeniV = game.add.button(game.world.centerX-70, game.world.centerY+95, 'bckBtnCTV', function(){
    this.state.start('MainMenu');
 }  , this, 2,1,0);
    var gumbNaprejV = game.add.button(game.world.centerX+70, game.world.centerY+95, 'nxtBtnCTV', function(){
   this.state.start('MultiVMlvl2');
 }  , this, 2,1,0);
    gumbMeniV.anchor.setTo(0.5,0.5);
    gumbNaprejV.anchor.setTo(0.5,0.5);
    
}

if(zmagaM){
    if(zmageMesar == 0){
    zmageMesar++;
        }
     var zmagaMMeni = game.add.image(game.world.centerX, game.world.centerY, 'butchWinM');
     zmagaMMeni.anchor.setTo(0.5,0.5);
     var gumbMeniM = game.add.button(game.world.centerX-70, game.world.centerY+95, 'bckBtnCTV', function(){
    this.state.start('MainMenu');
 }  , this, 2,1,0);
    var gumbNaprejM = game.add.button(game.world.centerX+70, game.world.centerY+95, 'nxtBtnCTV', function(){
    this.state.start('MultiVMlvl2');
 }  , this, 2,1,0);
    gumbMeniM.anchor.setTo(0.5,0.5);
    gumbNaprejM.anchor.setTo(0.5,0.5);
}



},

vstreliV:function(){
    if(this.time.now > shootTimeV){
        metekV = metkiV.getFirstExists(false);
        if(metekV){
            metekV.reset(veganka.x, veganka.y);
            if(levoV){
                metekV.body.velocity.x = -600;
            } else {
            metekV.body.velocity.x = 600;
                }
            shootTimeV = this.time.now + 400;
        }
    }
},

vstreliM:function(){
    if(this.time.now > shootTimeM){
        metekM = metkiM.getFirstExists(false);
        if(metekM){
            metekM.reset(mesar.x, mesar.y);
            if(levoM){
                metekM.body.velocity.x = -600;
            } else {
            metekM.body.velocity.x = 600;
                }

            shootTimeM = this.time.now + 400;
        }
    }
},

}

function checkOverlapVM(spriteA, spriteB){

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}
