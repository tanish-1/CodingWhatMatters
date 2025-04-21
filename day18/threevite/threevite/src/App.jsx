

import * as THREE from 'three'
function App() {
 
 const threejsfuncCube = () =>{
  const scene = new THREE.Scene();
  console.log(scene)
  const cubeGeometry = new THREE.BoxGeometry(1,1,1);
  const cubeMaterial = new THREE.MeshBasicMaterial({color : "red"})
  const cubeMesh = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial,
  )
  console.log(cubeMesh)
  scene.add(cubeMesh)
  console.log(scene)
}

  return (
    <>
    {threejsfuncCube()}
    </>
  )
}

export default App
