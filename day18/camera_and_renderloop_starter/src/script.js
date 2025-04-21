import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
console.log(OrbitControls)
// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
// position
//  cubeMesh.position.x = 1
//rotation
// cubeMesh.rotation.x= 1
// PI = 3.14 = 180 
// cubeMesh.rotation.y = Math.PI   //--> 180 degree 
// cubeMesh.rotation.y = Math.PI * 2
//cubeMesh.rotation.y = Math.PI / 4 // 45 degree
//scaling
// cubeMesh.scale.x= 3
scene.add(cubeMesh)


// initialize the camera
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  1,
  30)
camera.position.z = 5


// initialize the renderer
const canvas = document.querySelector('.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)
// initantiate the controls
const controls = new OrbitControls(camera,canvas)
controls.enableDamping  = true
controls.autoRotate = true
const renderloop = () =>{
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderloop)
}
 renderloop()
 window.addEventListener('resize',()=>{
  renderer.setSize(window.innerWidth,window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
 })

