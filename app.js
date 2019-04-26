// const c = 299792458
// const G = 6.67 * Math.pow(10, -11)
const c = 25
const G = 2
const deltaTime = 0.1

let m87
let photons = []
let start, end

function setup() {
    createCanvas(screen.width, height)

    // ~6.67 billion M of the sun
    // M of the sun 1.989 * 10^30 kg
    m87 = new Blackhole(width / 2, height / 2, 3000)

    start = height / 2
    end = height / 2 - m87.rs * 2.6
    for (let y = 0; y < start; y += 20) {
        photons.push(
            new Photon(width - 20, y)
        )
    }
}

function draw() {
    background(50)

    for (let photon of photons) {
        m87.pull(photon)

        photon.update()
        photon.show()
    }

    m87.show()
}
