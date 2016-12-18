Game.MultiVMlvl3 = function(game){}

var mapMVlvl3;
var layerMV;

var veganka;
var controlsV = {};
var mesar;
var controlsM = {};
var vegankaSpeedMVlvl3 = 100;
var mesarSpeedMVlvl3 = 100;
var jumpTimerV = 0;
var jumpTimerM = 0;
var metkiV;
var metkiM;
var levoV = true;
var levoM = true;
var ustreljenV = null;
var ustreljenM =  null;
var zmagaV = false;
var zmagaM = false;

var povZV3 = 0;
var povZM3 = 0;

Game.MultiVMlvl3.prototype = {

create: function(game){
  zmagaV = false;
  zmagaM = false;

  this.stage.backgroundColor = '#6AA2CC';
  this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 400, 'background');
  this.backgroundSprite.fixedToCamera = true;

  this.physics.arcade.gravity.y = 0;

  mapMVlvl3 = this.add.tilemap('mapMVlvl3', 25, 25);
  mapMVlvl3.addTilesetImage('tilesetMV');

  layerMV = mapMVlvl3.createLayer(0);

  layerMV.resizeWorld();

  mapMVlvl3.setCollisionBetween(0,1);

  veganka = this.add.sprite(50,30, 'veganka');
  veganka.anchor.setTo(0.5);
  veganka.scale.setTo(0.5);
  veganka.animations.add('idle', [0,1], 1, true );
  veganka.animations.add('jump', [2], 1, true );
  veganka.animations.add('run', [3,4,5,6,7,8], 7, true );
  this.physics.arcade.enable(veganka);
  veganka.body.gravity.y = 2500;

  mesar = this.add.sprite(750,30, 'mesarM');
  mesar.anchor.setTo(0.5);
  mesar.scale.setTo(-0.5,0.5);
  mesar.animations.add('idle', [0,1], 1, true );
  mesar.animations.add('jump', [2], 1, true );
  mesar.animations.add('run', [3,4,5,6], 5, true );
  this.physics.arcade.enable(mesar);
  mesar.body.gravity.y = 2500;

  this.camera.focusOnXY(400, 200);
  veganka.body.collideWorldBounds = true;
  mesar.body.collideWorldBounds = true;
    
  metkiV = game.add.group();
  metkiV.enableBody = true;
  metkiV.physicsBodyType = Phaser.Physics.ARCADE;
  metkiV.createMultiple(500, 'metekV');
  metkiV.setAll('anchor.x', 0.5);
  metkiV.setAll('anchor.y', 0.5);
  metkiV.setAll('scale.x', 0.5);
  metkiV.setAll('scale.y', 0.5);
  metkiV.setAll('outOfBoundsKill', true);
  metkiV.setAll('checkWorldBounds', true);

  metkiM = game.add.group();
  metkiM.enableBody = true;
  metkiM.physicsBodyType = Phaser.Physics.ARCADE;
  metkiM.createMultiple(500, 'metekMe');
  metkiM.setAll('anchor.x', 0.1);
  metkiM.setAll('anchor.y', 0.1);
  metkiM.setAll('scale.x', 0.3);
  metkiM.setAll('scale.y', 0.3);
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
    veganka.body.velocity.x += vegankaSpeedMVlvl2;
  }

  if(controlsV.left.isDown){
    veganka.animations.play('run');
    levoV = true;
    veganka.scale.setTo(-0.5, 0.5);
    veganka.body.velocity.x -= vegankaSpeedMVlvl2;
  }

  if(controlsV.up.isDown && (veganka.body.onFloor() ||
      veganka.body.touching.down) && this.time.now > jumpTimerV){
      veganka.body.velocity.y =- 700;
      jumpTimerV = this.time.now + 700;
      veganka.animations.play('jump');
  }

  if(veganka.body.velocity.x == 0 && veganka.body.velocity.y == 0){
    veganka.animations.play('idle');
  }

    if(ustreljenV != null){
  if(mapMVlvl3.getTile(layerMV.getTileX(ustreljenV.x), layerMV.getTileY(ustreljenV.y), layerMV, true).index != -1){
    ustreljenV.kill();
    ustreljenV = null;
  }
        }
    
  if(controlsV.shoot.isDown && ustreljenV == null){
    this.vstreliV();
  }


  if(controlsM.right.isDown){
    mesar.animations.play('run');
    levoM = false;
    mesar.scale.setTo(0.5);
    mesar.body.velocity.x += mesarSpeedMVlvl2;
  }

  if(controlsM.left.isDown){
    mesar.animations.play('run');
    levoM = true;
    mesar.scale.setTo(-0.5, 0.5);
    mesar.body.velocity.x -= mesarSpeedMVlvl2;
  }

  if(controlsM.up.isDown && (mesar.body.onFloor() ||
      mesar.body.touching.down) && this.time.now > jumpTimerM){
      mesar.body.velocity.y =- 700;
      jumpTimerM = this.time.now + 700;
      mesar.animations.play('jump');
  }

  if(mesar.body.velocity.x == 0 && mesar.body.velocity.y == 0){
    mesar.animations.play('idle');
  }

  if(ustreljenM != null){
    if(mapMVlvl3.getTile(layerMV.getTileX(ustreljenM.x), layerMV.getTileY(ustreljenM.y), layerMV, true).index != -1){
        ustreljenM.kill();
        ustreljenM = null;
    }
  }
    
 if(controlsM.shoot.isDown && ustreljenM == null){
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
    if(povZV3 == 0){
        zmageVegan++;
        povZV3 = 1;
     }
     var zmagaVMeni = game.add.image(game.world.centerX, game.world.centerY, 'vegWinM');
     zmagaVMeni.anchor.setTo(0.5,0.5);
     var gumbMeniV = game.add.button(game.world.centerX, game.world.centerY+95, 'bckBtnCTV', function(){
    this.state.start('MainMenu');
 }  , this, 2,1,0);
   /* var gumbNaprejV = game.add.button(game.world.centerX+70, game.world.centerY+95, 'nxtBtnCTV', function(){
 }  , this, 2,1,0);*/
    gumbMeniV.anchor.setTo(0.5,0.5);
   // gumbNaprejV.anchor.setTo(0.5,0.5);
}

if(zmagaM){
    if(povZM3 == 0){
        zmageMesar++;
        povZM3 = 1;
     }
     var zmagaMMeni = game.add.image(game.world.centerX, game.world.centerY, 'butchWinM');
     zmagaMMeni.anchor.setTo(0.5,0.5);
     var gumbMeniM = game.add.button(game.world.centerX, game.world.centerY+95, 'bckBtnCTV', function(){
    this.state.start('MainMenu');
 }  , this, 2,1,0);
   /* var gumbNaprejM = game.add.button(game.world.centerX+70, game.world.centerY+95, 'nxtBtnCTV', function(){
 }  , this, 2,1,0);*/
    gumbMeniM.anchor.setTo(0.5,0.5);
   // gumbNaprejM.anchor.setTo(0.5,0.5);
}



},

vstreliV:function(){
    metekV = metkiV.getFirstExists(false);
    ustreljenV = metekV;
    if(metekV){
        metekV.reset(veganka.x, veganka.y-8);
        if(levoV){
            metekV.body.velocity.x = -450;
        } else {
            metekV.body.velocity.x = 450;
            }
    }
},

vstreliM:function(){
    metekM = metkiM.getFirstExists(false);
    ustreljenM = metekM;
    if(metekM){
        metekM.reset(mesar.x, mesar.y-8);
        if(levoM){
            metekM.body.velocity.x = -450;
        } else {
            metekM.body.velocity.x = 450;
        }
    }
},


}

function checkOverlapVM(spriteA, spriteB){

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}

