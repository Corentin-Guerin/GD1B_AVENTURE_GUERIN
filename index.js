
var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: "game-container",
    backgroundColor : 0x000000,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    input : {gamepad:true},
    scene: [Scene1, Scene2,Scene3],
    scale: {zoom:1,}

};

var game = new Phaser.Game(config);

