import * as THREE from 'three'

// initialize the scene
const scene = new THREE.Scene();

//objects or Mesh 
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color:"red"})
const cubeMesh = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial
)
// add ojects to the scene
scene.add(cubeMesh)

// initalize the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 30)

// position the camera
camera.position.z = 5


// initalize the renderer
const canvas = document.querySelector(".threejs") 
const renderer = new THREE.WebGLRenderer({ canvas})
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)