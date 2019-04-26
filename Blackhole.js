class Blackhole {
    constructor(x, y, m) {
        this.pos = createVector(x, y)
        this.mass = m
        // https://en.wikipedia.org/wiki/Schwarzschild_radius
        this.rs = (2 * G * this.mass) / (c * c)
    }

    pull(photon) {
        const force = createVector(this.pos.x, this.pos.y);
        force.subtract(photon.pos.x, photon.pos.y)

        const r = force.magnitude()
        // Fg = G * m1 * m2 / r2
        const fg = G * this.mass / (r * r)

        force.setMagnitude(fg)

        photon.vel.add(force)
        photon.vel.limit(c)
    }

    show() {
        fill(0, 0, 0)
        circle(this.pos.x, this.pos.y, this.rs * 2)
    }
}
