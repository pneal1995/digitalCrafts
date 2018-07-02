import turtle

led=turtle.Turtle()

myscreen = turtle.Screen()
myscreen.bgcolor("black")
led.speed(7)

def star(size, color):
    angle = 120
    led.fillcolor(color)
    # led.beginfill(color)

    for side in range(5):
        led.forward(size)
        led.right(angle)
        led.forward(size)
        led.right(72 - angle)
    tina.end_fill()
    return

star(25, "yellow")



