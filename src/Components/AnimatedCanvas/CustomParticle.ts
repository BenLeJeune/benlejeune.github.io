const mu = 1

type rgba_type = {r:number, g:number, b:number}

export class CustomParticle {
    private x: number
    private y: number;
    private radius: number;
    private hue: number;
    private time: number;
    private next_tumble_time: number;
    private theta: number;
    private velocity: number;
    private color_velocity:number;

    constructor(x:number, y:number, radius:number, hue:number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.hue = hue
        this.theta = Math.random() * 2 * Math.PI

        this.velocity = 0.1
        this.color_velocity = 0.5

        this.time = 0
        this.next_tumble_time = this.get_next_tumble_time()
    }

    get_next_tumble_time() {
        // Uses the inverse CDF method
        const x = Math.random()
        return this.time + -Math.log(1 - x) / mu
    }

    tumble() {
        this.theta = Math.random() * 2 * Math.PI
    }

    animate(ctx:CanvasRenderingContext2D, stageWidth:number, stageHeight:number) {
        this.x += this.velocity * Math.cos(this.theta)
        this.y += this.velocity * Math.sin(this.theta)

        if (this.x < 0 || this.x > stageWidth) {   //Exits horizontally
            this.theta = Math.PI - this.theta
        }
        if (this.y < 0 || this.y > stageHeight) {   //Exits vertically
            this.theta = -this.theta
        }

        if (this.theta < 0) this.theta += 2 * Math.PI
        if (this.theta > 2 * Math.PI) this.theta -= 2 * Math.PI

        // Actually drawing the ball
        ctx.beginPath()
        const g = ctx.createRadialGradient(this.x, this.y, this.radius * 0.01, this.x, this.y, this.radius)
        const from_alpha = (alpha:number) => `hsla(${this.hue}, 100%, 50%, ${alpha})`
        g.addColorStop(0, from_alpha(1))
        g.addColorStop(1, from_alpha(0))
        ctx.fillStyle = g
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fill()

        this.time += 1/60
        this.hue += this.color_velocity
        if (this.time > this.next_tumble_time) {
            this.tumble()
            this.next_tumble_time = this.get_next_tumble_time()
        }
    }
}
