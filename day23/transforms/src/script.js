import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('.threejs')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.set(0.7,-0.6,1)
// scene.add(mesh)
//group
const group = new THREE.Group()
scene.add(group)

const cub1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cub1)

const cub2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
cub2.position.x = -2
group.add(cub2)
const cub3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cub3.position.x = 2
group.add(cub3)
//positioning
// console.log(mesh.position.length())
// console.log(mesh.position.normalize())
// console.log(mesh.position.distanceTo(camera.position))
// mesh.position.x = .7
// mesh.position.y = -.6
// mesh.position.z = 1
// just helper class to help in positing object in space 
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)
// mesh.position.set(0.7,-0.6,1)

// scale
// mesh.scale.x = 2
// mesh.scale.y = .5
// mesh.scale.y = .2
// mesh.scale.set(0.7,-0.6,1)

//Rotation
// mesh.rotation.y = Math.PI 
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y = 4
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3
camera.position.set(0,0,3)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)