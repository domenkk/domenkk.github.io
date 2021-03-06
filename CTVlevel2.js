Game.CTVlevel2 = function(game){}

var mapCTV2;
var layerCTV;

var vegankaCTV;
var butcherCTV;

var controlsVctv;
var controlsBctv;
var jumpTimerCTV = 0;
var vegankaSpeedCTV = 150;
var buctherSpeedCTV = 150;
var vegankaAngle = 0;
var butcherAngle = 0;

var timer2, timerEvent2, text2;
var winV = false;
var winB = false;
var preostanek;

Game.CTVlevel2.prototype = {

    create: function(game){
        winV = false;
        winB = false;
        this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'bckCTV');

          this.physics.arcade.gravity.y = 0;
        mapCTV2 = this.add.tilemap('mapCTV2', 25, 25);
        mapCTV2.addTilesetImage('tilesetMV');

        layerCTV = mapCTV2.createLayer(0);
        layerCTV.resizeWorld();

        mapCTV2.setCollisionBetween(0,2);
        vegankaCTV = this.add.sprite(60, 40, 'vegankaCTV');
        vegankaCTV.anchor.setTo(0.5, 0.5);
        vegankaCTV.scale.setTo(1.2,1.2);
        vegankaCTV.animations.add('idle', [0], 1, true);
        vegankaCTV.animations.add('run', [0,1,2,3], 4, true);
        this.physics.enable(vegankaCTV);
        vegankaCTV.body.collideWorldBounds = true;

        controlsVctv = {
             right: this.input.keyboard.addKey(Phaser.Keyboard.D),
             left: this.input.keyboard.addKey(Phaser.Keyboard.A),
             up: this.input.keyboard.addKey(Phaser.Keyboard.W),
             down: this.input.keyboard.addKey(Phaser.Keyboard.S),
        };


        butcherCTV = this.add.sprite(600,40, 'butcherCTV');
        butcherCTV.anchor.setTo(0.5, 0.5);
        butcherCTV.scale.setTo(1.2, 1.2);
        butcherCTV.animations.add('idle', [0], 1, true);
        butcherCTV.animations.add('run', [0,1,2,3], 4, true);
        this.physics.arcade.enable(butcherCTV);
        butcherCTV.body.collideWorldBounds = true;

        controlsBctv = {
             right: this.input.keyboard.addKey(Phaser.Keyboard.L),
             left: this.input.keyboard.addKey(Phaser.Keyboard.J),
             up: this.input.keyboard.addKey(Phaser.Keyboard.I),
             down: this.input.keyboard.addKey(Phaser.Keyboard.K),
        };

        timer = game.time.create();
        timerEvent = timer.add(Phaser.Timer.MINUTE * 1 + Phaser.Timer.SECOND * 30, this.endTimer, this);
        timer.start();

        text2 = game.add.text(game.world.centerX,52, 'tt');
        text2.anchor.setTo(0.5,0.5);

    },
    update: function(game){
        if(!winV && !winB){
        text2.text = this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)).toString();
        }
        this.physics.arcade.collide(vegankaCTV, layerCTV);
        vegankaCTV.body.velocity.x = 0;
        vegankaCTV.body.velocity.y = 0;
        vegankaCTV.angle = vegankaAngle;

        if(winV){
             var meniVegWin = game.add.image(game.world.centerX, game.world.centerY, 'vegWinM');
        meniVegWin.anchor.setTo(0.5,0.5);
         var btnB = game.add.button(game.world.centerX-70, game.world.centerY+95, 'bckBtnCTV', function(){
            this.state.start('MainMenu');
         }  , this, 2,1,0);
        var btnN = game.add.button(game.world.centerX+70, game.world.centerY+95, 'nxtBtnCTV', function(){
            this.state.start('CTVlevel3');
            //naslednji lvl
         }  , this, 2,1,0);
            btnB.anchor.setTo(0.5,0.5);
            btnN.anchor.setTo(0.5,0.5);
        }

        if(controlsVctv.right.isDown){
            vegankaCTV.animations.play('run');
            vegankaCTV.scale.setTo(-1.2,-1.2);
            vegankaAngle = -90;
            vegankaCTV.body.velocity.x += vegankaSpeedCTV;
        }

        if(controlsVctv.left.isDown){
            vegankaCTV.animations.play('run');
            vegankaCTV.scale.setTo(-1.2,-1.2);
            vegankaAngle = 90;
            vegankaCTV.body.velocity.x -= vegankaSpeedCTV;
        }

        if(controlsVctv.up.isDown){
            vegankaCTV.animations.play('run');
            vegankaCTV.scale.setTo(1.2,-1.2);
            vegankaAngle = 180;
            vegankaCTV.body.velocity.y -= vegankaSpeedCTV;
        }

        if(controlsVctv.down.isDown){
            vegankaAngle = 0;
            vegankaCTV.animations.play('run');
            vegankaCTV.scale.setTo(1.2,-1.2);
            vegankaCTV.body.velocity.y += vegankaSpeedCTV;
        }

        if(vegankaCTV.body.velocity.x == 0 && vegankaCTV.body.velocity.y == 0){
            vegankaCTV.animations.play('idle');
        }

        this.physics.arcade.collide(butcherCTV, layerCTV);
        butcherCTV.body.velocity.x = 0;
        butcherCTV.body.velocity.y = 0;
        butcherCTV.angle = butcherAngle;


        if(controlsBctv.right.isDown){
            butcherCTV.animations.play('run');
            butcherCTV.scale.setTo(1.2,-1.2);
            butcherCTV.body.velocity.x += buctherSpeedCTV;
            butcherAngle = -90;
        }

        if(controlsBctv.left.isDown){
            butcherCTV.animations.play('run');
            butcherCTV.scale.setTo(-1.2,-1.2);
            butcherCTV.body.velocity.x -= buctherSpeedCTV;
            butcherAngle = 90;
        }

        if(controlsBctv.up.isDown){
            butcherCTV.animations.play('run');
            butcherCTV.scale.setTo(1.2,-1.2);
            butcherCTV.body.velocity.y -= buctherSpeedCTV;
            butcherAngle = 180;
        }

        if(controlsBctv.down.isDown){
            butcherCTV.animations.play('run');
            butcherCTV.scale.setTo(1.2,-1.2);
            butcherCTV.body.velocity.y += buctherSpeedCTV;
            butcherAngle = 0;
        }

        if(butcherCTV.body.velocity.x == 0 && butcherCTV.body.velocity.y == 0){
            butcherCTV.animations.play('idle');
        }

        if(checkOverlapVM(vegankaCTV, butcherCTV)){
            winB = true;
            timer.stop();
            var meniButchWin = game.add.image(game.world.centerX, game.world.centerY, 'butchWinM');
            meniButchWin.anchor.setTo(0.5,0.5);
            var btnB = game.add.button(game.world.centerX-70, game.world.centerY+95, 'bckBtnCTV', function(){
                this.state.start('MainMenu');
            }  , this, 2,1,0);
            var btnN = game.add.button(game.world.centerX+70, game.world.centerY+95, 'nxtBtnCTV', function(){
           this.state.start('CTVlevel3');
            //naslednji lvl
            }  , this, 2,1,0);
            btnB.anchor.setTo(0.5,0.5);
            btnN.anchor.setTo(0.5,0.5);
            vegankaCTV.kill();
            butcherCTV.kill();
        }
    },

    endTimer: function(game) {
        winV = true;
        vegankaCTV.kill();
        butcherCTV.kill();
        timer.stop();
    },
    formatTime: function(s) {
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    }

}

function mesarVegana(spriteA, spriteB){

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}
