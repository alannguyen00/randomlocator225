controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    rocky.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    randomSprite.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
let rocky: Sprite = null
let randomSprite: Sprite = null
randomSprite = sprites.create(img`
. . . . . . f . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 2 2 2 2 2 f . . . . . 
. . . . f 2 2 2 2 2 2 f f . . . 
. . . f f 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 2 1 1 1 2 1 1 1 f . 
. . . f 1 1 1 1 1 1 1 1 1 1 f . 
. . f f 1 1 1 1 2 2 1 1 1 1 f . 
. . . f 2 1 1 1 2 2 1 1 2 2 f . 
. . . f 2 2 2 1 1 1 1 2 2 1 f . 
. . . f 1 1 2 2 2 2 2 2 1 1 f . 
. . . . f 1 1 1 1 1 1 1 f f . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . 5 . . . . . . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . 5 . 5 . . . . . . 
`, SpriteKind.Player)
randomSprite.setPosition(51, 95)
rocky = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . 
. . . . . . . . . . . . d d d d d d d d d d d d . . . . . . . . 
. . . . . . . . . . . d d d f d d d d d d d f d d . . . . . . . 
. . . . . . . . . . d d d d f f f d d d f f f d d d . . . . . . 
. . . . . . . . . . d d d d d d d d d d d d d d d d . . . . . . 
. . . . . . . . . . d d d d d d f d d d d f d d d d d . . . . . 
. . . . . . . . . . d d d d d d d d d d d d d d d d d . . . . . 
. . . . . . . . . . . d d d d d f f f f f d d d d d d . . . . . 
. . . . . . . . . . . d d d d f d d d d d f d d d d d . . . . . 
. . . . . . . . . . . . d d d d d d d d d d d d d d . . . . . . 
. . . . . . . . . . . . . d d d f f f f f d d d d . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d d d d d . . . . . . . 
. . . . . . . . . . . . . . . . d d d d . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d d d . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d d d d . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d f d d . . . . . . . . 
. . . . . . . . . . . d f f d d d d d f f d d f d . . . . . . . 
. . . . . . . . . . d d d f d d d d d f f f f d d d . . . . . . 
. . . . . . . . . . d . . d d d d d d d f d d f d f d . . . . . 
. . . . . . . . . . . . . d d d d d d f f f d d . d d . . . . . 
. . . . . . . . . . . . . d d d d d d d f d d d . . d . . . . . 
. . . . . . . . . . . . . d d d d d d d d d d d . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . 
. . . . . . . . . . . . . d d f 1 1 1 1 f d . . . . . . . . . . 
. . . . . . . . . . . . . d d f f f f f d d . . . . . . . . . . 
. . . . . . . . . . . . . f . . . . . . . f . . . . . . . . . . 
. . . . . . . . . . . . d d . . . . . . . d d . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.splash("This is my rocky game")
