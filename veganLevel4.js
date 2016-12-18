EnemyButcher = function(index, game, x, y, mov, spd){

    this.mesarE = game.add.sprite(x,y,'mesarEn');
    this.mesarE.scale.setTo(0.35,0.35);
    this.mesarE.anchor.setTo(0.5, 0.5);
    this.mesarE.name = index.toString();

    game.physics.enable(this.mesarE, Phaser.Physics.ARCADE);

    this.mesarE.body.immovable = true;

    this.mesarE.body.collideWorldBounds = true;

    this.mesarETween = game.add.tween(this.mesarE).to({
        x: this.mesarE.x + mov
    }, spd, 'Linear', true, 0, 100, true);

}

var enemyM5;
var enemyM6;
var enemyM7;
var enemyM5Killed = false;
var enemyM6Killed = false;
var enemyM7Killed = false;


Game.VeganLevel4 = function(game){}

var mapV4;
var layerV4;

var veganka;
var controlsV = {};
var vegankaSpeed = 250;
var jumpTimer = 0;

var shootTimeV = 0;
var metkiV;

var stKor4 = 0;
var indPobrKor4 = [];

var levoV = false;




Game.VeganLevel4.prototype = {

create: function(game){

    pointsV = 0;

  glasbaV4 = this.add.audio("gameSong");
  glasbaV4.play('', 0, 1, true);

  skok4 = this.add.audio("skok");
  hrana4 = this.add.audio("jabolko");
  strel4 = this.add.audio("strel");
  power4 = this.add.audio("power");

  this.stage.backgroundColor = '#3e4dbc';
  this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
  this.backgroundSprite.fixedToCamera = true;
  this.physics.arcade.gravity.y = 0;

  mapV4 = this.add.tilemap('mapV4',64,64);
  mapV4.addTilesetImage('tilesetV');

  layerV4 = mapV4.createLayer(0);

  layerV4.resizeWorld();

  mapV4.setCollisionBetween(0,2);

  mapV4.setTileIndexCallback(2, this.resetVegan, this);

  mapV4.setTileIndexCallback(3, this.getKorencek, this);

  mapV4.setTileIndexCallback(5, this.prehodLvl5, this);

  mapV4.setTileIndexCallback(6, this.speedUp, this);

  veganka = this.add.sprite(100,10, 'veganka');
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
} else  if (zivljenjaV == 5){
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

metkiV = game.add.group();
metkiV.enableBody = true;

metkiV.physicsBodyType = Phaser.Physics.ARCADE;
metkiV.createMultiple(500,'metekV');

    metkiV.setAll('anchor.x', 0.5);
    metkiV.setAll('anchor.y', 0.5);

metkiV.setAll('outOfBoundsKill', true);
metkiV.setAll('chechWorldBounds', true);


  enemyM5 = new EnemyButcher(0, game, 1300, 360, 200, 1800);
  enemyM6 = new EnemyButcher(1, game, 1750, 425, 350, 3000);
  enemyM7 = new EnemyButcher(2, game, 4900, 425, 350, 3000);



},
update: function(game){

  this.physics.arcade.collide(veganka, layerV4);

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
        skok4.play();
  }

  if(veganka.body.velocity.x == 0 && veganka.body.velocity.y == 0){
    veganka.animations.play('idle');

  }

    if(controlsV.shoot.isDown){
        this.shootMetek();
    }



if(zivljenjaV == 0){

    var meniGO = game.add.image(game.camera.x + 220, game.camera.y + 150, 'mnGO');
    veganka.kill();
     var btnB = game.add.button(game.camera.x + 320, game.camera.y + 350, 'bckGO', function(){
       glasbaV4.stop();
      this.state.start('MainMenu');
  }  , this, 2,1,0);
    var scoreTextGO = game.add.text(game.camera.x + 410,  game.camera.y + 265, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });
    scoreTextGO.text = tockeV;
}

    if(checkOverlapVM(veganka,enemyM5.mesarE)){
        this.resetVegan();
    }

     if(checkOverlapVM(metkiV, enemyM5.mesarE)){
        enemyM5.mesarE.kill();
         enemyM5Killed = true;
    }

        if(checkOverlapVM(veganka,enemyM6.mesarE)){
        this.resetVegan();
    }

     if(checkOverlapVM(metkiV, enemyM6.mesarE)){
        enemyM6.mesarE.kill();
         enemyM6Killed = true;
    }

        if(checkOverlapVM(veganka,enemyM7.mesarE)){
        this.resetVegan();
    }

     if(checkOverlapVM(metkiV, enemyM7.mesarE)){
        enemyM7.mesarE.kill();
         enemyM7Killed = true;
    }
},

resetVegan:function(){
  veganka.reset(100,10);
  for(i = 0; i < stKor4; i++){
    mapV4.putTile(3, indPobrKor4[i].x, indPobrKor4[i].y);
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

     stKor4 = 0;
    pointsV = 0;
  scoreText.text = 'Score: ' + stKor4;
  console.log(stKor4);

    if(enemyM5Killed){
        enemyM5 = new EnemyButcher(0, this, 1300, 360, 200, 1800);
    }
    if(enemyM6Killed){
        enemyM6 = new EnemyButcher(1, this, 1750, 425, 350, 3000);
    }
    if(enemyM7Killed){
        enemyM7 = new EnemyButcher(2, this, 4900, 425, 350, 3000);
    }

},

getKorencek:function(){
  if(mapV4.getTile(layerV4.getTileX(veganka.x), layerV4.getTileY(veganka.y), layerV4, true).index != -1){
    stKor4++;
      pointsV = stKor4*20;
    var koorPobrKor = {};
    koorPobrKor.x = layerV4.getTileX(veganka.x);
    koorPobrKor.y = layerV4.getTileY(veganka.y);
    indPobrKor4[stKor4-1] = koorPobrKor;
      console.log(stKor4 + "  " + indPobrKor4[stKor4-1].x + " " + indPobrKor4[stKor4-1].y);
      scoreText.text = 'Score: ' + pointsV;
      mapV4.putTile(-1, layerV4.getTileX(veganka.x), layerV4.getTileY(veganka.y));

      hrana4.play();
  }
},

shootMetek:function(){
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
        strel4.play();
    }
},

speedUp: function(){
    if(mapV4.getTile(layerV4.getTileX(veganka.x), layerV4.getTileY(veganka.y), layerV4, true).index != -1){

      mapV4.putTile(-1, layerV4.getTileX(veganka.x), layerV4.getTileY(veganka.y));

     vegankaSpeed += 150;

     this.time.events.add(Phaser.Timer.SECOND * 5, function (){
         vegankaSpeed -= 150;
     });

     power.play();
  }
},

prehodLvl5:function(){
  this.state.start('VeganBoss');
    tockeV+=pointsV;
    glasbaV4.stop();
},

}

function checkOverlapVM(spriteA, spriteB){

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}
