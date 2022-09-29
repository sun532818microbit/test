input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 100) {
        basic.showNumber(randint(1, 35))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
