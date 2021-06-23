import * as THREE from '../threejs/three.module.js'



// textuer loader
const loader = new THREE.TextureLoader();
const star = loader.load('../image/star.png');


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// particals
let particalsGeometry = new THREE.BufferGeometry;
let particalsCount = 5000;
let particalsPosition = new Float32Array(particalsCount * 3);

for (let i = 0; i < particalsCount * 3; i++) {
    particalsPosition[i] = (Math.random() - 0.5) * 5;

}
particalsGeometry.setAttribute("position", new THREE.BufferAttribute(particalsPosition, 3))
// Objects
const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);

// Materials

const material = new THREE.PointsMaterial({
    size: 0.005
})
const particaleMaterial = new THREE.PointsMaterial({
    size: 0.005,
    map: star,
    transparent: true,
})

// Mesh
const sphere = new THREE.Points(geometry, material)
const particals = new THREE.Points(particalsGeometry, particaleMaterial)
scene.add(sphere, particals)

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: 0.98 * window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new THREE.Color('#21282a'), 1);

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime;
    particals.rotation.y = starDirection * 0.05 * elapsedTime;


    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()