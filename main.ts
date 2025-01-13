namespace SpriteKind {
    export const Flag = SpriteKind.create()
}
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
let Birdy_1_duck: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level 1 two paths`)
Birdy_1_duck = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
let Birdy_2_robin = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
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
