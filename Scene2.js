var cursors;
var player;
var enemie1;
var enemies1;
var enemie2;
var enemies2;
var invincible = false ;
var compteur = 60;
var life = 3 ;
var lifetext;   
var gameOver;
var shoots;
var shoot;
var arrow = 10 ;
var cursors2;
var direction = 'up';
var itemlife;
var itemarrow;
var itemlifes;
var itemarrows;

class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame");
     
      
    }
  
    preload (){ 


        this.load.image("tiles", "assets/tilesets/tuxmon-sample-32px-extruded.png");
        this.load.tilemapTiledJSON("map", "assets/tilemaps/tuxemon-town2.json");

        this.load.atlas("atlas", "assets/atlas/atlas.png", "../assets/atlas/atlas.json");
        //this.load.spritesheet('atlas', 'assets/atlas/Perso/Perso.png', { frameWidth:24, frameHeight: 20,});
        
    }

    create(){
     
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");

        const belowLayer = map.createStaticLayer("Below Player", tileset, 0, 0);
        const belowLayer2 = map.createStaticLayer("Below PlayerTwo", tileset, 0, 0);
        const worldLayer = map.createStaticLayer("World", tileset, 0, 0);
        const aboveLayer = map.createStaticLayer("Above Player", tileset, 0, 0);

      
        worldLayer.setCollisionByProperty({ collides: true });
        aboveLayer.setDepth(10);

    
        const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

        player = this.physics.add
            .sprite(spawnPoint.x, spawnPoint.y, "atlas", "Perso-front")
            .setSize(32, 32,)
            .setOffset(0, 32);
 

        const camera = this.cameras.main;
        camera.startFollow(player);
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        //camera.setBounds(0, 0, player.widthInPixels, player.heightInPixels);

        //Enemie////////////////////////
        
        const enemieObjects = map.getObjectLayer('EnemiesVer').objects;
        enemies1 = this.physics.add.group({
        }); 

        for (const enemie1 of enemieObjects) {
        //enemies.create(enemie.x, enemie.y, 'Enemie1')
        enemies1.create(enemie1.x, enemie1.y, 'Enemie1')
            
            .setDepth(1)
            .setScale(1)
            .setSize(32, 32,)
        }

        for (const enemie1 of enemies1.children.entries) {
            enemie1.direction = 'UP';
            enemie1.isDed = false;
        }  

        const enemieObjects2 = map.getObjectLayer('EnemiesHor').objects;
            enemies2 = this.physics.add.group({
            }); 

            for (const enemie2 of enemieObjects2) {
            //enemies.create(enemie.x, enemie.y, 'Enemie1')
            enemies2.create(enemie2.x, enemie2.y, 'Enemie2')
                .setDepth(1)
                .setScale(1)
                .setSize(32, 32,)
            }

        for (const enemie2 of enemies2.children.entries) {
            enemie2.direction = 'RIGHT';
            enemie2.isDed = false;
        }  


        shoots = this.physics.add.group();
        itemarrows = this.physics.add.group();
        itemlifes = this.physics.add.group();

        this.physics.add.collider(player, worldLayer);
        this.physics.add.collider(player, enemies1);   
        this.physics.add.collider(player, enemies2);      
        this.physics.add.collider(enemies1, worldLayer);
        this.physics.add.collider(enemies2, worldLayer);
        /*this.physics.add.collider(enemies1, enemies2);
        this.physics.add.collider(enemies1, enemies1);
        this.physics.add.collider(enemies2, enemies2);*/

        this.physics.world.addCollider(player, enemies1, hitplayer, null, this);
        this.physics.world.addCollider(player, enemies2, hitplayer, null, this);

        this.physics.add.collider(shoots, worldLayer,hitwalls, null, this);
        this.physics.add.overlap(enemies1, shoots,hitenemies, null, this);
        this.physics.add.overlap(enemies2, shoots,hitenemies, null, this);

        this.physics.add.overlap(player, itemarrows,addarrow, null, this);
        this.physics.add.overlap(player, itemlifes,addlife, null, this);


        cursors = this.input.keyboard.createCursorKeys();
        cursors2 = this.input.keyboard.addKeys('A,Z,S,Q,D,T,space');

        const anims = this.anims;
        anims.create({
            key: "Perso-left-walk",
            frames: anims.generateFrameNames("atlas", {
            prefix: "Perso-left-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        anims.create({
            key: "Perso-right-walk",
            frames: anims.generateFrameNames("atlas", {
            prefix: "Perso-right-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        anims.create({
            key: "Perso-front-walk",
            frames: anims.generateFrameNames("atlas", {
            prefix: "Perso-front-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        anims.create({
            key: "Perso-back-walk",
            frames: anims.generateFrameNames("atlas", {
            prefix: "Perso-back-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
    

    }

    update (){


        for (const enemie1 of enemies1.children.entries) {
            if (enemie1.body.blocked.up) {
                enemie1.direction = 'UP';
            }
    
            if (enemie1.body.blocked.down) {
                enemie1.direction = 'DOWN';
            }
    
            if (enemie1.direction === 'UP') {
                enemie1.setVelocityY(100);
                enemie1.setFlipX(false);
                
            } else {
                enemie1.setVelocityY(-100);
                enemie1.setFlipX(true);
               
            }
           
        }


        for (const enemie2 of enemies2.children.entries) {
            if (enemie2.body.blocked.right) {
                enemie2.direction = 'LEFT';
            }
    
            if (enemie2.body.blocked.left) {
                enemie2.direction = 'RIGHT';
            }
    
            if (enemie2.direction === 'RIGHT') {
                enemie2.setVelocityX(100);
                enemie2.setFlipX(false);
                
            } else {
                enemie2.setVelocityX(-100);
                enemie2.setFlipX(true);
                
            }
           
        }
        
        this.add.text(16, 30, "Vie: " + life, {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
            .setDepth(12)
            .setScrollFactor(0);

        this.add.text(16, 75, "Flèches: " + arrow, {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
            .setDepth(12)
            .setScrollFactor(0);


        if(invincible == true){
            compteur-- ;
            if(compteur == 0){
                compteur = 60;
                player.setTint(0xffffff);
                invincible = false ;
            }
        }
        if (life === 0){
            
            this.physics.pause();
            player.setTint(0xff0000);
            this.add
                .text(500, 400, "Game Over", {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 50, y: 25 },
                backgroundColor: "#ffffff"
                })
            .setDepth(1)
            .setScrollFactor(0);

            gameOver = true;
        }

        if (gameOver)
        {
            return;
        }

        const speed = 175;
        const prevVelocity = player.body.velocity.clone();

        //mouvement si rien n'est affecter
        player.body.setVelocity(0);


        // Horizontal movement
        if (cursors.left.isDown) {
            player.body.setVelocityX(-speed);
            direction = 'right' ;
        } else if (cursors.right.isDown) {
            player.body.setVelocityX(speed);
            direction = 'left' ;
        }

        // Vertical movement
        if (cursors.up.isDown) {
            player.body.setVelocityY(-speed);
            direction = 'down' ;
        } else if (cursors.down.isDown) {
            player.body.setVelocityY(speed);
            direction = 'up' ;
        }

        // Normalize and scale the velocity so that player can't move faster along a diagonal
        player.body.velocity.normalize().scale(speed);

        // Update the animation last and give left/right animations precedence over up/down animations
        if (cursors.left.isDown) {
            player.anims.play("Perso-left-walk", true);
        } else if (cursors.right.isDown) {
            player.anims.play("Perso-right-walk", true);
        } else if (cursors.up.isDown) {
            player.anims.play("Perso-back-walk", true);
        } else if (cursors.down.isDown) {
            player.anims.play("Perso-front-walk", true);
        } else {
            player.anims.stop();
            // If we were moving, pick and idle frame to use
            if (prevVelocity.x < 0) player.setTexture("atlas", "Perso-left");
            else if (prevVelocity.x > 0) player.setTexture("atlas", "Perso-right");
            else if (prevVelocity.y < 0) player.setTexture("atlas", "Perso-back");
            else if (prevVelocity.y > 0) player.setTexture("atlas", "Perso-front");
        }

        const JustDownA = Phaser.Input.Keyboard.JustDown(cursors2.A)       
    
        if (JustDownA && arrow >0 )
        {
            shoot = shoots.create(player.x,player.y+16,'shoot');
            shoot.body.allowGravity = false;
            shoot.allowGravity = false;
            arrow-- ;
    
            if(direction == 'left'){
                shoot.setVelocityX(550);
                shoot.setFlipX(false);
            }
            else if(direction == 'right') {
                shoot.setVelocityX(-550);
                shoot.setFlipX(false);
            }
            else if(direction == 'down'){
                shoot.setVelocityY(-550);
                shoot.setFlipX(false);
            }
            else if (direction == 'up'){
                shoot.setVelocityY(550);
                shoot.setFlipX(true);
            }
           
        }

    }
    
}
function hitplayer (){
    if (invincible === false)
    {
        invincible = true;
        life--;
        player.setTint(0xff0000);
    }
}

function hitenemies (enemies,shoot)
{   
    enemies.destroy();
    shoot.destroy();
    aleatoire = Math.floor(Math.random() * Math.floor(4));
    if (aleatoire == 1){
        itemlife = itemlifes.create(enemies.x,enemies.y,'itemlife');
    }
    else if (aleatoire == 2){
        itemarrow = itemarrows.create(enemies.x,enemies.y,'itemarrow');
    }
}

function hitwalls (shoot,worldLayer)
{      
    shoot.destroy();
}

function addarrow(player, itemarrow)
{      
    itemarrow.destroy();
    arrow = arrow + 10 ; 
    if(arrow > 99 ){
        arrow = 99 ;
    }
    
}
function addlife(player, itemlife)
{      
    itemlife.destroy();
    if(life < 3 ){
        life = life + 1 ; 
    }
}
