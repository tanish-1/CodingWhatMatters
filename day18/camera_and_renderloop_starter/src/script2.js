import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// initialze scene
const scene = new THREE.Scene()

// create object or mesh
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "orange"})
const mesh = new THREE.Mesh(geometry , material);
scene.add(mesh)

//setting the camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight , 0.1 , 100)
camera.position.set(0,0,5)

// intialize the renderer
const canvas = document.querySelector('.threejs');
const renderer = new THREE.WebGLRenderer({canvas: canvas,antialias: true})
renderer.setSize(window.innerWidth,innerHeight)

//initialize orbitControls
const controls  = new OrbitControls(camera , canvas)

// renderer.render(scene,camera)

window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})
controls.enableDamping  = true
controls.autoRotate = true
// controls.enableZoom = false

function animate(){
    renderer.render(scene,camera)
    controls.update()
    window.requestAnimationFrame(animate);
    // mesh.rotation.y += 0.01
}
animate()