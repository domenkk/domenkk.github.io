Game.MesarLevel1 = function(game){};

var mapa;
var sloj;
var mesar;
var tipke;
var skoki = 0; // cas med zaporednimi skoki
var gravitacija = 9;
var nebo;

var zivljenjaM = 5;
var life1M;
var life2M;
var life3M;
var life4M;
var life5M;

Game.MesarLevel1.prototype = {
    create:function(game) {


      //nebo
      nebo=this.add.tileSprite(0,-25, 1500000, 600, 'nebo');
      this.physics.arcade.gravity.x = 9;

		zivljenjaM = 5;
      //podloga
      zemljevid = this.add.tilemap('zemljevid', 62, 62);
      zemljevid.addTilesetImage('tiles'); // dodamo travnato povrsino
      sloj = zemljevid.createLayer(0);

      sloj.resizeWorld();

      zemljevid.setCollisionBetween(0,25); // preskoki med posameznimi kvadrati povrsine
      zemljevid.setTileIndexCallback(0, this.resetPlayer, this); // spicasto korenje
      zemljevid.setTileIndexCallback(1, this.dodajTocke, this);
      zemljevid.setTileIndexCallback(2, this.dodajTocke, this);
      zemljevid.setTileIndexCallback(3, this.dodajTocke, this);

      mesar = this.add.sprite(0,0, 'mesar');
      mesar.anchor.setTo(0, 0);
      mesar.scale.set(0.3 , 0.3); // pomanjsamo mesarja
      mesar.animations.add('idle',[0,1], 1, true);
      mesar.animations.add('jump',[2], 1, true);
      mesar.animations.add('run',[3,4,5,6,7], 7, true);

      //kontrole
      this.physics.arcade.enable(mesar); // omogocanje tipk
      this.camera.follow(mesar);
      mesar.body.collideWorldBounds = true; // odboj od 'mej igre'

      tipke = this.input.keyboard.createCursorKeys();


	  var lifeTxt = game.add.text(10, 8, 'Lives:', {fontSize: '32px', fill: '#000'});
	  lifeTxt.fixedToCamera = true;

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

    },

    update:function(game) {
      nebo.tilePosition.x -=2;
      this.physics.arcade.collide(mesar, sloj);
      mesar.body.velocity.x = 0;
      mesar.body.velocity.y = 400;

      if(tipke.right.isDown){
        mesar.body.velocity.x += 100;
      }

      if(tipke.left.isDown){
        /*mesar.animations.play('run');
        mesar.scale.setTo(-1,1);*/
        mesar.body.velocity.x -= 100;
      }

      if(tipke.up.isDown ) {
        mesar.body.velocity.y = -200;
        /*skoki = this.time.now + 750;
        mesar.animations.play('jump');*/
      }
      if(tipke.down.isDown){
        mesar.body.velocity.y = 200;
      }

	  if(zivljenjaM == 0){

    var meniGO = game.add.image(game.camera.x + 220, game.camera.y + 150, 'mnGO');
    mesar.kill();
     var btnB = game.add.button(game.camera.x + 320, game.camera.y + 350, 'bckGO', function(){
      this.state.start('MainMenu');
  }  , this, 2,1,0);
    var scoreTextGO = game.add.text(game.camera.x + 410,  game.camera.y + 265, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });
    scoreTextGO.text = "0";
}
  },

  resetPlayer:function(){
    mesar.reset(0,460);
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

  dodajTocke:function(){
    zemljevid.putTile(-1, sloj.getTileX(mesar.x), sloj.getTileY(mesar.y));
  }

}
