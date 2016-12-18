
sovrazniVegan = function(index, game, x, y){

  this.enemy = game.add.sprite(x,y,'sovraznik'); // globalna spr. sovraznika
  this.enemy.anchor.setTo(0.5,0.5);
  this.enemy.scale.set(0.3 , 0.3);
  this.enemy.name = index.toString();
  game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
  this.enemy.immovable = true;
  this.enemy.collideWorldBounds = true;
  this.enemy.allowGravity = true;


  this.enemyTween = game.add.tween(this.enemy).to({
    x: this.enemy.x+100
  //  x: this.enemy.x
  },2000, 'Linear', true, 0, 100, true);

}
var enemy1;
Game.MesarLevel4 = function(game){}

var mapV1;
var layerV;

var mesar;
var controlsV = {};
var mesarSpeed = 150;
var jumpTimer = 0;

var stKor = 0;
var indPobrKor = [];

var shootTime = 0;
var kosti;

Game.MesarLevel4.prototype = {

create: function(game){
  this.stage.backgroundColor = '#3e4dbc';
  this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
  this.backgroundSprite.fixedToCamera = true;

  this.physics.arcade.gravity.y = 1100;


  mapV1 = this.add.tilemap('mapM1',64,64);
  mapV1.addTilesetImage('tileset');

  layerV = mapV1.createLayer(0);

  layerV.resizeWorld();

  mapV1.setCollisionBetween(3,4);

  mapV1.setTileIndexCallback(0, this.dodajPike,this);
  mapV1.setTileIndexCallback(1, this.hitreje, this);
  mapV1.setTileIndexCallback(2, this.resetVegan,this);
  mapV1.setTileIndexCallback(5, this.resetVegan,this);

  mesar = this.add.sprite(100,300, 'mesar');
  mesar.anchor.setTo(0.5,0.5);

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
      shoot: this.input.keyboard.addKey(Phaser.Keyboard.E),
  };

  scoreText = game.add.text(10, 52, 'Score: 0', { fontSize: '32px', fill: '#000' });
  scoreText.fixedToCamera = true;

  var lifeTxt = game.add.text(10, 8, 'Lives:', {fontSize: '32px', fill: '#000'});
lifeTxt.fixedToCamera = true;    
    
 if (zivljenjaM == 5){
life1M = game.add.image(100, 0, 'srcek');
life2M = game.add.image(130, 0, 'srcek');
life3M = game.add.image(160, 0, 'srcek');
life4M = game.add.image(190, 0, 'srcek');
life5M = game.add.image(220, 0, 'srcek');
life1M.fixedToCamera = true;
life2M.fixedToCamera = true;
life3M.fixedToCamera = true;
life4M.fixedToCamera = true;
life5M.fixedToCamera = true;
} else if (zivljenjaM == 4){
life1M = game.add.image(100, 0, 'srcek');
life2M = game.add.image(130, 0, 'srcek');
life3M = game.add.image(160, 0, 'srcek');
life4M = game.add.image(190, 0, 'srcek');
life1M.fixedToCamera = true;
life2M.fixedToCamera = true;
life3M.fixedToCamera = true;
life4M.fixedToCamera = true;
} else if (zivljenjaM == 3){
life1M = game.add.image(100, 0, 'srcek');
life2M = game.add.image(130, 0, 'srcek');
life3M = game.add.image(160, 0, 'srcek');
life1M.fixedToCamera = true;
life2M.fixedToCamera = true;
life3M.fixedToCamera = true;
} else if (zivljenjaM == 2){
life1M = game.add.image(100, 0, 'srcek');
life2M = game.add.image(130, 0, 'srcek');
life1M.fixedToCamera = true;
life2M.fixedToCamera = true;
} else if (zivljenjaM == 1){
life1M = game.add.image(100, 0, 'srcek');
life1M.fixedToCamera = true;
}
  
  
  
  enemy1 = new sovrazniVegan(0, game, 500, 0);
  enemy2 = new sovrazniVegan(1, game, 900, 0);
  enemy3 = new sovrazniVegan(2, game, 1350, 0);

  kosti = game.add.group();
  kosti.enableBody = true;
  kosti.physicsBodyType = Phaser.Physics.ARCADE;
  kosti.createMultiple(5, 'kost');

  kosti.setAll('anchor.x', 0.5);
  kosti.setAll('anchor.y', 0.5);
  kosti.setAll('scale.x', 0.5);
  kosti.setAll('scale.y', 0.5);
  kosti.setAll('outOfBoundsKill', true);
  kosti.setAll('checkWorldBounds', true);

},
update: function(game){

  this.physics.arcade.collide(mesar, layerV);
  this.physics.arcade.collide(enemy1.enemy, layerV);
  this.physics.arcade.collide(enemy2.enemy, layerV);
  this.physics.arcade.collide(enemy3.enemy, layerV);
  this.physics.arcade.collide(mesar, enemy1.enemy, this.resetVegan);
  this.physics.arcade.collide(mesar, enemy2.enemy, this.resetVegan);
  this.physics.arcade.collide(mesar, enemy3.enemy, this.resetVegan);

  mesar.body.velocity.x = 0;

  if(controlsV.right.isDown){
    mesar.animations.play('run');
    mesar.scale.setTo(1,1);
    mesar.body.velocity.x += mesarSpeed;
  }

  if(controlsV.left.isDown){
    mesar.animations.play('run');
    mesar.scale.setTo(-1,1);
    mesar.body.velocity.x -= mesarSpeed;
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

  if(zivljenjaM == 0){
    
    var meniGO = game.add.image(game.camera.x + 220, game.camera.y + 150, 'mnGO');   
    mesar.kill();
     var btnB = game.add.button(game.camera.x + 320, game.camera.y + 350, 'bckGO', function(){
      this.state.start('MainMenu');
  }  , this, 2,1,0);
    var scoreTextGO = game.add.text(game.camera.x + 410,  game.camera.y + 265, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });
    scoreTextGO.text = stKor;
}


  if(controlsV.shoot.isDown){
    this.ustreli();
  }

  if(checkOverlap(kosti, enemy1.enemy)){
    enemy1.enemy.kill();
  }

  if(checkOverlap(kosti, enemy2.enemy)){
    enemy2.enemy.kill();
  }

  if(checkOverlap(kosti, enemy3.enemy)){
    enemy3.enemy.kill();
  }
},

resetVegan:function(){
  mesar.reset(100,300);
  /*for(i = 0; i < stKor; i++){
    mapV1.putTile(3, indPobrKor[i].x, indPobrKor[i].y);
    console.log( stKor + " " + i + " k " + indPobrKor[i].x + " " + indPobrKor[i].y);
  }
  stKor = 0;
  scoreText.text = 'Score: ' + stKor;
  console.log(stKor);*/
  stKor=0;
  scoreText.text = 'Score: ' + stKor;
  
  	if(zivljenjaM == 5){
    life5M.visible = false;
    zivljenjaM-=1;
} else if (zivljenjaM == 4){
    life4M.visible = false;
    zivljenjaM-=1;
} else if (zivljenjaM == 3){
    life3M.visible = false;
    zivljenjaM-=1;
} else if (zivljenjaM == 2){
    life2M.visible = false;
    zivljenjaM-=1;
} else if (zivljenjaM == 1){
    life1M.visible = false;
    zivljenjaM-=1;
}
  
  
},

dodajPike:function(){
  if(mapV1.getTile(layerV.getTileX(mesar.x), layerV.getTileY(mesar.y), layerV, true).index != -1){
    stKor++;
    var koorPobrKor = {};
    koorPobrKor.x = layerV.getTileX(mesar.x);
    koorPobrKor.y = layerV.getTileY(mesar.y);
    indPobrKor[stKor-1] = koorPobrKor;
      console.log(stKor + "  " + indPobrKor[stKor-1].x + " " + indPobrKor[stKor-1].y);
      scoreText.text = 'Score: ' + stKor;
      mapV1.putTile(-1, layerV.getTileX(mesar.x), layerV.getTileY(mesar.y));
  }
  //stKor++;

},

hitreje:function(){
  mapV1.putTile(-1, layerV.getTileX(mesar.x), layerV.getTileY(mesar.y));
  mesar.body.gravity.x += 300;
},


ustreli:function(){
  if(this.time.now > shootTime){
    kost = kosti.getFirstExists(false);
    if(kost){
      kost.reset(mesar.x, mesar.y);
      kost.body.velocity.x = 500; // gravitacija
      kost.body.velocity.y = -250;
      shootTime = this.time.now + 700;
    }
  }
},

}

function checkOverlap(spriteA, spriteB){

  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();

  return Phaser.Rectangle.intersects(boundsA, boundsB);

}
