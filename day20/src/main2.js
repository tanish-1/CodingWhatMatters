import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//dom element
let canvas = document.querySelector('.threejs')
//scene
let scene = new THREE.Scene()

//camera 
let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,100)
camera.position.set(0,0,5)

//mesh or object
let geometry = new THREE.SphereGeometry(1,32,12)
let torusknotgeo = new THREE.TorusKnotGeometry(.5,.15,100,16)

//materials
// let material = new THREE.MeshBasicMaterial()
//meshlambert material and mesh phong material
let material = new THREE.MeshStandardMaterial()
material.shininess = 90
let mesh = new THREE.Mesh(geometry,material)
let mesh2 = new THREE.Mesh(torusknotgeo,material)
mesh2.position.set(2 , 0 , 0)
scene.add(mesh)
scene.add(mesh2)

//axes helper 
// let axesHelper = new THREE.AxesHelper(2)
// scene.add(axesHelper)

//lights
let light = new THREE.AmbientLight(0xffffff,1)
scene.add(light)

let pointlight = new THREE.PointLight(0xffffff,1)
pointlight.position.set(1,1,0)
scene.add(pointlight)

let pointlighthelper = new THREE.PointLightHelper(pointlight,.5)
// pointlighthelper.position.set(1,1,0)
scene.add(pointlighthelper)
//controls
const controls = new OrbitControls(camera, canvas)
controls.enableZoom = true

//renderer
let renderer = new THREE.WebGLRenderer({canvas: canvas,antialias: true})
renderer.setSize(window.innerWidth,window.innerHeight)
// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // optional unless damping is enabled
    renderer.render(scene, camera);
  }
  animate();