Game.MesarLevel2 = function(game){}

var mapM2;
var layerV;

var mesar;
var controlsM = {};
var mesarSpeed = 150;
var jumpTimer = 0;

var stKlobas = 0;
var indPobrKor = [];
var tockeKlob = 0;


Game.MesarLevel2.prototype = {

create: function(game){
  this.stage.backgroundColor = '#3e4dbc';
  this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
  this.backgroundSprite.fixedToCamera = true;

  this.physics.arcade.gravity.y = 1100;


  mapM2 = this.add.tilemap('mapM2',64,64);
  mapM2.addTilesetImage('tilesetV');

  layerV = mapM2.createLayer(0);

  layerV.resizeWorld();

  mapM2.setCollisionBetween(0,2);

  mapM2.setTileIndexCallback(2, this.resetMesar,this);

  mapM2.setTileIndexCallback(3, this.getKlobasa,this);

  mesar = this.add.sprite(100,300, 'mesar');
  mesar.anchor.setTo(0.5,0.5);

  mesar.animations.add('idle', [0,1], 1, true );
  mesar.animations.add('jump', [2], 1, true );
  mesar.animations.add('run', [3,4,5,6], 5, true );
  this.physics.arcade.enable(mesar);

  this.camera.follow(mesar);
  mesar.body.collideWorldBounds = true;

  controlsM = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
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

},
update: function(game){

  this.physics.arcade.collide(mesar, layerV);

  mesar.body.velocity.x = 0;

  if(controlsM.right.isDown){
    mesar.animations.play('run');
    mesar.scale.setTo(1,1);
    mesar.body.velocity.x += mesarSpeed;
  }

  if(controlsM.left.isDown){
    mesar.animations.play('run');
    mesar.scale.setTo(-1,1);
    mesar.body.velocity.x -= mesarSpeed;
  }

  if(controlsM.up.isDown && (mesar.body.onFloor() ||
  mesar.body.touching.down) && this.time.now > jumpTimer){
      mesar.body.velocity.y = -650;
      jumpTimer = this.time.now + 650;
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
    scoreTextGO.text = tockeKlob;
}



},

resetMesar:function(){
  mesar.reset(100,300);
  for(i = 0; i < stKlobas; i++){
    mapM2.putTile(3, indPobrKor[i].x, indPobrKor[i].y);
    console.log( stKlobas + " " + i + " k " + indPobrKor[i].x + " " + indPobrKor[i].y);
  }
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
	tockeKlob+=stKlobas;
}
  stKlobas = 0;
  scoreText.text = 'Score: ' + stKlobas;
  console.log(stKlobas);
  

},

getKlobasa:function(){
  if(mapM2.getTile(layerV.getTileX(mesar.x), layerV.getTileY(mesar.y), layerV, true).index != -1){
    stKlobas++;
    var koorPobrKor = {};
    koorPobrKor.x = layerV.getTileX(mesar.x);
    koorPobrKor.y = layerV.getTileY(mesar.y);
    indPobrKor[stKlobas-1] = koorPobrKor;
      console.log(stKlobas + "  " + indPobrKor[stKlobas-1].x + " " + indPobrKor[stKlobas-1].y);
      scoreText.text = 'Score: ' + stKlobas;
      mapM2.putTile(-1, layerV.getTileX(mesar.x), layerV.getTileY(mesar.y));
  }

  

},
/*
module.exports = LoadingProcess;

function LoadingProcess() {

    this.landingSprite = {}; 
    this.preloader = {}; 

    this.loadingProcessInPercentage = {};
}

LoadingProcess.prototype.show = function(showPercentage) {

    this.landingSprite = ('background');

    this.preloader = ('background');
    

    //here we prepare text object for percentages
    if(showPercentage) {
        this.loadingProcessInPercentage = game.add.text(game.width / 2 - 20, game.height / 2 - 100, 0 + ' %', {
                                                font: '50px "Press Start 2P"',
                                                fill: '#000000'
                                          });
        this.loadingProcessInPercentage.fixedToCamera = true;
    }
}

LoadingProcess.prototype.hide = function() {

	this.preloader.kill();
    this.landingSprite.kill();
    if(this.loadingProcessInPercentage != null) {
        this.loadingProcessInPercentage.kill();
    }
}

*/

}
