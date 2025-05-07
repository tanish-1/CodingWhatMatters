import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { plane } from 'three/examples/jsm/Addons.js';
import { array } from 'three/tsl';
const scene = new THREE.Scene()
const canvas = document.querySelector('.threejs')
//custom geometry
// const geometry = new THREE.BufferGeometry()
// const vertices = new Float32Array([
//   0, 0 , 0,
//   0, 1 , 0,
//   1, 0 , 0,
// ])
// const SetAttritubtes = new THREE.BufferAttribute(vertices,3)
// geometry.setAttribute("position",SetAttritubtes)

//boxgeometry
const geometry = new THREE.BoxGeometry(1,1,1)
const planeGeo = new THREE.PlaneGeometry(1,1)
const material = new THREE.MeshBasicMaterial(
  {
    // transparent: true,  
    // opacity:0.5
  }
)
material.color = new THREE.Color('red')
material.side = THREE.DoubleSide
material.fog = true
const fog = new THREE.Fog('white',1,10)
scene.fog = fog
scene.background = new THREE.Color('white')
const mesh = new THREE.Mesh(geometry , material)
const plane = new THREE.Mesh(planeGeo,material)
plane.position.x = -1.5
// mesh.position.set(1,1,0)
// mesh.position.normalize()
scene.add(mesh)
scene.add(plane)
console.log(mesh.position.length())
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1000)
camera.position.z = 4
// const axesHelper = new THREE.AxesHelper(2)
// mesh.add(axesHelper)
const axesHelper2 = new THREE.AxesHelper(2)
scene.add(axesHelper2)
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = false

console.log(mesh.position.distanceTo(camera.position))
const renderer = new THREE.WebGLRenderer({canvas:canvas,antialias: true})
renderer.setSize(window.innerWidth , window.innerHeight)
// initialze the clock

const clock = new THREE.Clock()
let previousTime = 0
const animate = () => {
  controls.update()
  const currentTime = clock.getElapsedTime()
  const delta = currentTime - previousTime
   previousTime = currentTime
    
  renderer.render(scene,camera)
  window.requestAnimationFrame(animate)

}
animate()

window.addEventListener('resize', ()=>{
  renderer.setSize(window.innerWidth , window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})