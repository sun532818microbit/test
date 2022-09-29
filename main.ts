input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (input.lightLevel() > 100) {
        basic.showNumber(randint(1, 35))
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.clearScreen()
})
