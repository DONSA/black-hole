class Photon {
    constructor(x, y) {
        this.pos = new createVector(x, y)
        this.vel = new createVector(-c, 0)
    }

    show() {
        fill(255, 255, 0)
        strokeWeight(4)
        point(this.pos.x, this.pos.y)
    }

    update() {
        const deltaVel = this.vel.copy().multiply(deltaTime)

        this.pos.add(deltaVel)
    }
}
