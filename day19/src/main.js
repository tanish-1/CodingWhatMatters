import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:"red", wireframe: true});

const mesh = new THREE.Mesh(geometry,material);
// mesh.position.y = -1
// const mesh2 = new THREE.Mesh(geometry,material);
// mesh2.position.x = 2;
// const mesh3 = new THREE.Mesh(geometry,material);

// mesh3.position.x = -2
// const group = new THREE.Group()
// group.add(mesh)
// group.add(mesh2)
// group.add(mesh3)

// group.position.y = 2;
// const tempVector = new THREE.Vector3(0,0,0)
// mesh.position.copy(tempVector)
mesh.position.y = 1
mesh.position.x = 1

scene.add(mesh)

const axesHelper = new THREE.AxesHelper(2);
mesh.add(axesHelper)
//light 
// const light = new THREE.AmbientLight(0xffffff,.6)
// scene.add(light)
// const directionallight = new THREE.DirectionalLight(0x008000, 6)
// directionallight.position.set(2,1,0)
// scene.add(directionallight)
// const directionalHelper = new THREE.DirectionalLightHelper(directionallight,1)
// scene.add(directionalHelper)
// const pointlight = new THREE.PointLight(0xffffff,4,0,1)
// pointlight.position.set(-1,2.3,1)
// scene.add(pointlight)
// const pointHelper = new THREE.PointLightHelper(pointlight,0.7)
// scene.add(pointHelper)
//camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,100)
// const aspectRatio = window.innerWidth / window.innerHeight
// const camera = new THREE.OrthographicCamera(
//   -1*aspectRatio,
//   1*aspectRatio,
//   1,
//   -1,
//   .1,
//   200
// )
camera.position.set(0,0,5)

console.log(mesh.position.distanceTo(camera.position))
const canvas = document.querySelector('.threejs')
const renderer = new THREE.WebGLRenderer({canvas: canvas,antialias: true})
renderer.setSize(window.innerWidth,window.innerHeight)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = false
controls.enableZoom = false
const animate = () => {
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(animate)
  mesh.rotation.reorder(
    'YXZ'
  )
  mesh.rotation.x += .02
  mesh.rotation.y += .02
 
}
animate()

window.addEventListener('resize',()=>{
  renderer.setSize(window.innerWidth,window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})