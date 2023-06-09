info.onScore(25, function () {
    game.showLongText("blue wins", DialogLayout.Center)
    game.reset()
})
scene.setBackgroundColor(7)
info.setScore(0)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 f 6 6 6 6 6 6 f 6 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 100)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 f 2 2 2 2 2 2 f 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(8, 8)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(143, 104)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
forever(function () {
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))) {
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), effects.none, 500)
        game.showLongText("red wins", DialogLayout.Center)
        game.reset()
    }
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
})
