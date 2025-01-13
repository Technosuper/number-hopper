namespace SpriteKind {
    export const Flag = SpriteKind.create()
}
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Birdy_1_duck.vy == 0) {
        Birdy_1_duck.vy = -170
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.clouds)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.clouds)
    game.reset()
})
function patroling_snake () {
    Evil_Snake = sprites.create(assets.image`forestSnake0`, SpriteKind.Enemy)
    for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar.attachToSprite(Evil_Snake)
        tiles.placeOnTile(Evil_Snake, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        if (Math.percentChance(50)) {
            Evil_Snake.vx = 50
        } else {
            Evil_Snake.ax = -50
        }
        Evil_Snake.setBounceOnWall(true)
        for (let value of spriteutils.getSpritesWithin(SpriteKind.Player, 50, mySprite)) {
            Evil_Snake.sayText("Des-s-stroy")
        }
    }
}
let statusbar: StatusBarSprite = null
let Evil_Snake: Sprite = null
let Birdy_2_robin: Sprite = null
let Birdy_1_duck: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level 1 two paths`)
info.player1.setLife(3)
info.player2.setLife(3)
patroling_snake()
Birdy_1_duck = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
tiles.placeOnTile(Birdy_1_duck, tiles.getTileLocation(1, 6))
Birdy_1_duck = sprites.create(assets.image`Ducky`, SpriteKind.Player)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Birdy_1_duck)
tiles.placeOnTile(Birdy_2_robin, tiles.getTileLocation(1, 6))
Birdy_2_robin = sprites.create(assets.image`Robin`, SpriteKind.Player)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Birdy_2_robin)
Birdy_1_duck.ay = 200
Birdy_2_robin.ay = 200
controller.moveSprite(Birdy_1_duck, 100, 0)
controller.player2.moveSprite(Birdy_2_robin, 100, 0)
