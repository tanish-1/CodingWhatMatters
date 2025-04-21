import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui'; 
// Initialize scene
const scene = new THREE.Scene();

let loader = new THREE.TextureLoader();
let color = loader.load("./text/color.jpg");
let roughness = loader.load("./text/roughness.jpg");
let height = loader.load("./text/height.png");

// Create object or mesh
const geometry = new THREE.BoxGeometry(3, 1.8, 2);
const material = new THREE.MeshStandardMaterial({
  map: color,
  roughnessMap: roughness
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Setting the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 0, 5);

// Initialize the renderer
const canvas = document.querySelector('.threejs');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Initialize OrbitControls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

// Lighting
let ambientLightlight = new THREE.AmbientLight(0xffffff,1)
scene.add(ambientLightlight)

let directional = new THREE.DirectionalLight(0xffffff,4)
directional.position.set(2,2,1)
scene.add(directional)

let helper = new THREE.DirectionalLightHelper(directional,2)
scene.add(helper)

let pointlight = new THREE.PointLight(0xffffff, 1 , 10 , 2);
pointlight.position.set(1,-1.52,1)
scene.add(pointlight)

let pointhelper = new THREE.PointLightHelper(pointlight,.2)
scene.add(pointhelper)
// 🟡 GUI Setup
// const gui = new GUI();

// const settings = {
//   autoRotate: true,
//   ambientIntensity: 0.5,
//   pointLightY: 5,
//   rotationSpeed: 0.01,
//   roughness: 0.5
// };

// gui.add(settings, 'autoRotate').onChange(value => {
//   controls.autoRotate = value;
// });
// gui.add(settings, 'ambientIntensity', 0, 1).onChange(value => {
//   ambientLight.intensity = value;
// });
// gui.add(settings, 'pointLightY', -10, 10).onChange(value => {
//   pointLight.position.y = value;
// });
// gui.add(settings, 'rotationSpeed', 0, 0.1);
// gui.add(settings, 'roughness', 0, 1).onChange(value => {
//     material.roughness = value;
//   });

// Animate
function animate() {
  controls.update();
//   mesh.rotation.y += settings.rotationSpeed;
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}
animate();

// Responsive resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});