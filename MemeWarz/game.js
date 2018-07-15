var theGame = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload()
{
    theGame.load.image('back', 'bg.jpg');
    theGame.load.spritesheet('dude', 'assets/img/dude.png', 32,48);
}

function create()
{
    theGame.add.sprite(0,0,'dude');
}

function update()
{
    
}