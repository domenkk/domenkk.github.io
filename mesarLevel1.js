Game.MesarLevel1 = function(game){};

var konec;
var mapa;
var sloj;
var mesar;
var tipke;
var skoki = 0; // cas med zaporednimi skoki
var gravitacija = 9;
var nebo;
var mesarSpeed = 150;

var stKlobas = 0;
var indPobrKor = [];
var tockeKlob = 0;

var life1M;
var life2M;
var life3M;
var life4M;
var life5M;
var life6M;
var life7M;
var life8M;
var life9M;
var life10M;

Game.MesarLevel1.prototype = {
    create:function(game) {
      //nebo
      this.stage.backgroundColor = '#3e4dbc';
       this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'nebo');
       this.backgroundSprite.fixedToCamera = true;
      this.physics.arcade.gravity.y = 1100;

        zivljenjaM = zivljenjaMesar;
      //podloga
      zemljevid = this.add.tilemap('zemljevid', 64, 64);
      zemljevid.addTilesetImage('tiles'); // dodamo travnato povrsino
      sloj = zemljevid.createLayer(0);

      sloj.resizeWorld();

      zemljevid.setCollisionBetween(3,4); // preskoki med posameznimi kvadrati povrsine
      zemljevid.setTileIndexCallback(2, this.resetPlayer, this); // spicasto korenje
      zemljevid.setTileIndexCallback(0, this.getKlobasa, this);
      zemljevid.setTileIndexCallback(1, this.getKlobasa, this);
      //zemljevid.setTileIndexCallback(3, this.dodajTocke, this);

      konec = this.add.sprite(2490,520,'zastava');
      konec.scale.setTo(0.1,0.1);

      mesar = this.add.sprite(100,300, 'mesar');
      mesar.anchor.setTo(0.5, 0.5);
      mesar.animations.add('idle',[0,1], 1, true);
      mesar.animations.add('jump',[2], 1, true);
      mesar.animations.add('run',[3,4,5,6,7,8], 7, true);

      //kontrole
      this.physics.arcade.enable(mesar); // omogocanje tipk
      this.camera.follow(mesar);
      mesar.body.collideWorldBounds = true; // odboj od 'mej igre'

      tipke = this.input.keyboard.createCursorKeys();

        scoreText = this.add.text(10, 52, 'Score: 0', { fontSize: '32px', fill: '#000' });
  scoreText.fixedToCamera = true;
        
      var lifeTxt = this.add.text(10, 8, 'Lives:', {fontSize: '32px', fill: '#000'});
      lifeTxt.fixedToCamera = true;

  life1M = this.add.image(100, 0, 'srcek');
  life2M = this.add.image(130, 0, 'srcek');
  life3M = this.add.image(160, 0, 'srcek');
  life4M = this.add.image(190, 0, 'srcek');
  life5M = this.add.image(220, 0, 'srcek');

  life1M.fixedToCamera = true;
  life2M.fixedToCamera = true;
  life3M.fixedToCamera = true;
  life4M.fixedToCamera = true;
  life5M.fixedToCamera = true;
        
        if(zivljenjaM == 6){
    life6M = game.add.image(250, 0, 'srcek');
    life6M.fixedToCamera = true;
} else if(zivljenjaM == 7){
    life6M = game.add.image(250, 0, 'srcek');
    life6M.fixedToCamera = true;
    life7M = game.add.image(280, 0, 'srcek');
    life7M.fixedToCamera = true;
} else if(zivljenjaM == 8){
    life6M = game.add.image(250, 0, 'srcek');
    life6M.fixedToCamera = true;
    life7M = game.add.image(280, 0, 'srcek');
    life7M.fixedToCamera = true;
    life8M = game.add.image(310, 0, 'srcek');
    life8M.fixedToCamera = true;
} else if(zivljenjaM == 9){
    life6M = game.add.image(250, 0, 'srcek');
    life6M.fixedToCamera = true;
    life7M = game.add.image(280, 0, 'srcek');
    life7M.fixedToCamera = true;
    life8M = game.add.image(310, 0, 'srcek');
    life8M.fixedToCamera = true;
    life9M = game.add.image(340, 0, 'srcek');
    life9M.fixedToCamera = true;
} else if(zivljenjaM == 10){
    life6M = game.add.image(250, 0, 'srcek');
    life6M.fixedToCamera = true;
    life7M = game.add.image(280, 0, 'srcek');
    life7M.fixedToCamera = true;
    life8M = game.add.image(310, 0, 'srcek');
    life8M.fixedToCamera = true;
    life9M = game.add.image(340, 0, 'srcek');
    life9M.fixedToCamera = true;
    life10M = game.add.image(370, 0, 'srcek');
    life10M.fixedToCamera = true;
}
        
        
    },

    update:function() {
      //nebo.tilePosition.x -=2;
      this.physics.arcade.collide(mesar, sloj);
      mesar.body.velocity.x = 0;

      if(tipke.right.isDown){
        mesar.animations.play('run');
        mesar.scale.setTo(1,1);
        mesar.body.velocity.x += mesarSpeed;
      }

      if(tipke.left.isDown){
        mesar.animations.play('run');
        mesar.scale.setTo(-1,1);
        mesar.body.velocity.x -= mesarSpeed;
      }

      if(tipke.up.isDown && (mesar.body.onFloor()||mesar.body.touching.down) && this.time.now > skoki) {
        mesar.body.velocity.y = -700;
        skoki = this.time.now + 750;
        mesar.animations.play('jump');
      }
      if(mesar.body.velocity.x == 0 && mesar.body.velocity.y == 0){
     mesar.animations.play('idle');

   }

   if(zivljenjaM == 0){
   tockeV+=stKlobas;
   var meniGO = this.add.image(this.camera.x + 220, this.camera.y + 150, 'mnGO');
   mesar.kill();
    var btnB = this.add.button(this.camera.x + 320, this.camera.y + 350, 'bckGO', function(){
     this.state.start('MainMenu');
 }  , this, 2,1,0);
   var scoreTextGO = this.add.text(this.camera.x + 410,  this.camera.y + 265, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });
   scoreTextGO.text = "0";
}

    if(konecIgre(mesar, konec)){
        tockeV+=stKlobas;
      this.state.start('MesarLevel2');
    }
  },

  resetPlayer:function(){
    mesar.reset(0,460);
    if(zivljenjaM == 10){
    life10M.visible = false;
    zivljenjaM-=1;
} else if(zivljenjaM == 9){
    life9M.visible = false;
    zivljenjaM-=1;
} else if(zivljenjaM == 8){
    life8M.visible = false;
    zivljenjaM-=1;
} else if(zivljenjaM == 7){
    life7M.visible = false;
    zivljenjaM-=1;
} else if(zivljenjaM == 6){
    life6M.visible = false;
    zivljenjaM-=1;
} else if(zivljenjaM == 5){
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

  getKlobasa:function(){
  if(zemljevid.getTile(sloj.getTileX(mesar.x), sloj.getTileY(mesar.y), sloj, true).index != -1){
    stKlobas++;
    var koorPobrKor = {};
    koorPobrKor.x = sloj.getTileX(mesar.x);
    koorPobrKor.y = sloj.getTileY(mesar.y);
    indPobrKor[stKlobas-1] = koorPobrKor;
      console.log(stKlobas + "  " + indPobrKor[stKlobas-1].x + " " + indPobrKor[stKlobas-1].y);
      scoreText.text = 'Score: ' + stKlobas;
      zemljevid.putTile(-1, sloj.getTileX(mesar.x), sloj.getTileY(mesar.y));
  }

  

},

}

function konecIgre(lik, kje){
  var tockaE = lik.getBounds();
  var tockaD = kje.getBounds();
  return Phaser.Rectangle.intersects(tockaE, tockaD);
}
