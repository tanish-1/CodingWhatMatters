const scene = new THREE.Scene()

const gemoetry = new THREE.BoxGeometry(2,2,2)
const material = new THREE.MeshBasicMaterial({color : "red"})

const box = new THREE.Mesh(gemoetry,material);

scene.add(box)

const size = {
    wiidth : 700,
    height : 500
}
const camera = new THREE.PerspectiveCamera(75,size.wiidth/size.height)
camera.position.z = 4
camera.position.x = 2
scene.add(camera)

//rendering
const target = document.querySelector(".wbgl")
const renderer = new THREE.WebGLRenderer({canvas : target})

renderer.setSize(size.wiidth,size.height)
renderer.render(scene,camera)

