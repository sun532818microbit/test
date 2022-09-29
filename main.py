def on_button_pressed_a():
    if input.light_level() > 100:
        basic.show_number(randint(1, 35))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)