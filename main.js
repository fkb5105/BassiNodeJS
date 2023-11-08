import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
//import './style.css';
/*import javascriptLogo from './javascript.svg'
// import viteLogo from 'public.vite.svg'*/
// import { setupCounter } from '../counter.js'
// Setup

const scene = new THREE.Scene();

//Textures
const starTexture = new THREE.TextureLoader().load('images/stars.png')
const circuitTexture = new THREE.TextureLoader().load('images/smile.jpeg')
const puffinTexture = new THREE.TextureLoader().load('images/smile.jpeg')

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
});


const geometry = new THREE.BoxGeometry(10, 10, 10);

//set the color of the basic material in the object parameters `{}`

const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );

const cube = new THREE.Mesh( geometry, material );

const controls = new OrbitControls(camera, renderer.domElement)


cube.position.z = -15;
cube.position.x = -15;

cube.rotation.x = 2;
cube.rotation.y = 50;

const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color: 0x006699 });
const icoMesh = new THREE.Mesh(ico, icoMaterial);

const sphereGeometry = new THREE.SphereGeometry( 15, 64, 32 );
// See https://threejs.org/docs/#api/en/geometries/SphereGeometry
const puffinMaterial = new THREE.MeshBasicMaterial({map: puffinTexture})
const puffinMesh = new THREE.Mesh(sphereGeometry, puffinMaterial);

// object.position.set ( x, y, z );
puffinMesh.position.set(-20, -20, -25);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

scene.background = starTexture;
scene.add( cube );
scene.add(icoMesh);
scene.add(puffinMesh)

icoMesh.position.z= -15;
icoMesh.position.x= 15;
scene.add(pointLight);
scene.add(ambientLight);

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

function animate() {
        requestAnimationFrame( animate );
        // slowly rotate the cube:
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // rotate the icosahedron a little faster in the opposite direction:
        icoMesh.rotation.z += -0.01
        icoMesh.rotation.y += -0.02

        puffinMesh.rotation.z += 0.02
        puffinMesh.rotation.y += 0.01
        controls.update()

        renderer.render( scene, camera );
}

animate();
    