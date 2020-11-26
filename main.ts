input.onButtonPressed(Button.A, function () {
    if (jogador.get(LedSpriteProperty.X) == 0) {
        jogador.set(LedSpriteProperty.X, 4)
    } else {
        jogador.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (jogador.get(LedSpriteProperty.X) == 4) {
        jogador.set(LedSpriteProperty.X, 0)
    } else {
        jogador.change(LedSpriteProperty.X, 1)
    }
})
let inimigo: game.LedSprite = null
let jogador: game.LedSprite = null
jogador = game.createSprite(2, 4)
basic.forever(function () {
    inimigo = game.createSprite(randint(0, 4), 0)
    while (true) {
        basic.pause(200)
        if (inimigo.get(LedSpriteProperty.Y) == 4) {
            break;
        } else {
            inimigo.change(LedSpriteProperty.Y, 1)
        }
        if (inimigo.isTouching(jogador)) {
            game.gameOver()
        }
    }
    basic.pause(200)
    inimigo.delete()
    game.addScore(1)
})
