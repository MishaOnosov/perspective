// import * as THREE from "three";
// import { OrbitControls } from "./js/OrbitControls.js";
// import { RGBELoader } from "./js/RGBELoader.js";
// import { FlakesTexture } from "./js/FlakesTexture.js";

// let scene, camera, renderer, rain, rainBuffer;
// const rainCount = 10000;

// function init() {
//     scene = new THREE.Scene()
//     scene.background = new THREE.Color(0x292929)
//     camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
//     camera.position.z = 1;

//     const ambientLight = new THREE.AmbientLight(0xfafafa)
//     scene.add(ambientLight)

//     rainBuffer = new THREE.BufferGeometry()
//     let posRain = new Float32Array(rainCount * 3)
//     for (let i = 0; i < (rainCount * 3); i+=3) {
//         posRain[i] = Math.random() * 400 - 200
//         posRain[i+1] = Math.random() * 100 - 50
//         posRain[i+2] = Math.random() * 300 - 150
//     }
//     rainBuffer.setAttribute('position', new THREE.BufferAttribute(posRain, 3))
//     let rainMaterial = new THREE.PointsMaterial({
//         color: 0xfafafa,
//         size: 0.2,
//         transparent: true
//     })
//     rain = new THREE.Points(rainBuffer, rainMaterial)
//     scene.add(rain)

//     renderer = new THREE.WebGLRenderer()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     document.body.appendChild(renderer.domElement)
// }

// function animate() {
//     requestAnimationFrame(animate)
//     const positions = rain.geometry.attributes.position.array
//     for (let i = 0; i < (rainCount * 3); i++) {
//         positions[i+1] -= 2.0 + Math.random() * 0.1
//         if (positions[i+1] < (-300 * Math.random())) {
//             positions[i+1] = 100
//         }
//         rain.geometry.attributes.position.needsUpdate = true;
//     }
//     renderer.render(scene, camera)
// }

// init()
// animate()
// function init() {
//     let size = Math.random() * 5
//     let positionX = Math.random() * 20
//     let positionY = Math.random() * 10

//     scene = new THREE.Scene();

//     renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     renderer.toneMapping = THREE.ACESFilmicToneMapping
//     renderer.toneMappingExposure = 1.25

//     camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.set(0, 0, 500);
//     controls = new OrbitControls(camera, renderer.domElement);

//     pointlight = new THREE.PointLight(0xffffff, 1);
//     pointlight.position.set(200, 200, 200);
//     scene.add(pointlight);

//     let envmaploader = new THREE.PMREMGenerator(renderer)

//     new RGBELoader().setPath('assets/').load('cayley_interior_4k.hdr', function (hdrmap) {
//         let envmap = envmaploader.fromCubemap(hdrmap)
//         let texture = new THREE.CanvasTexture(new FlakesTexture())
//         texture.wrapS = THREE.RepeatWrapping
//         texture.wrapT = THREE.RepeatWrapping
//         texture.repeat.x = 10
//         texture.repeat.y = 6

//         const ballMaterial = {
//             clearcoat: 1.0,
//             clearcoatRoughness: 0.1,
//             metalness: 0.9,
//             roughness: 0.5,
//             color: 0x8418ca,
//             normalMap: texture,
//             normalScale: new THREE.Vector2(0.15, 0.15),
//             envMap: envmap.texture
//         }

//         let ballGeo = new THREE.SphereGeometry(size, 64, 64);
//         let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
//         let ballMesh = new THREE.Mesh(ballGeo, ballMat);
//         ballMesh.position.set(positionX, 150+positionY, 0)
//         scene.add(ballMesh);

//         animate();
//     })
// }

// function animate() {
//     controls.update();
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }

// setTimeout(() => {
//     init()
// }, 1000)
