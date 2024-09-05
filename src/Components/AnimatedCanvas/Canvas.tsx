import React, {useEffect, useRef} from 'react';
import './Canvas.css'
import {CustomParticle} from './CustomParticle'

type Canvas_Props = {}

export default function Canvas(props: Canvas_Props) {

    const canvas_ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        // This runs once, representing the app startup
        window.addEventListener('resize', resize_listener)
        resize_listener()

        if (canvas_ref.current) {
            let x = new AnimationEngine(canvas_ref.current)
        }


        return () => {
            window.removeEventListener('resize', resize_listener)
        }
    }, [])


    const resize_listener = () => {
        if (!canvas_ref.current) return

        let c = canvas_ref.current
        const new_width = window.innerWidth
        const new_height = window.innerHeight

        c.width = new_width
        c.height = new_height
    }

    return <div className="canvasContainer">
        <canvas ref={canvas_ref}/>
    </div>
}

class AnimationEngine {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null
    private total_particles: number;
    private particles: CustomParticle[];
    private max_radius: number;
    private min_radius: number;
    private pixel_ratio: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')

        this.total_particles = 10
        if (window.innerWidth > 1500) {
            this.total_particles = 15
        }
        this.particles = []
        this.max_radius = 800
        this.min_radius = 400

        this.pixel_ratio = (window.devicePixelRatio > 1) ? 2 : 1


        for (let i = 0; i < this.total_particles / 2; i++) {

            const random_hue = Math.random() * 255

            const random_radius = (this.max_radius - this.min_radius) * Math.random() + this.min_radius

            const particle = new CustomParticle(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight,
                random_radius, random_hue
            )
            this.particles.push(particle)

            const particle_2 = new CustomParticle(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight,
                random_radius, random_hue + 180
            )
            this.particles.push(particle_2)
        }

        window.requestAnimationFrame(this.animate.bind(this))

        if (this.ctx) {
            this.ctx.globalCompositeOperation = 'saturation'
        }
    }

    animate() {
        if (!this.ctx) return
        window.requestAnimationFrame(this.animate.bind(this))

        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.particles.forEach(particle => {
            particle.animate(this.ctx as CanvasRenderingContext2D, window.innerWidth, window.innerHeight)
        })

    }
}