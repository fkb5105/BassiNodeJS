import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

/* AAAAAAA */ 
const scene = new THREE.Scene();
        
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(50);
        camera.position.setX(-3);

const geometry = new THREE.BoxGeometry(10, 10, 10);
       
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );
const cube = new THREE.Mesh( geometry, material );
        
scene.add( cube );

cube.position.z = -15;
  cube.position.x = -15;
cube.rotation.x = 2;
  cube.rotation.y = .5;

const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const icoMesh = new THREE.Mesh(ico, icoMaterial);
  
scene.add(icoMesh);
  
icoMesh.position.z= -15;
icoMesh.position.x= 15;

const pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(0, -20, 10);
        
const ambientLight = new THREE.AmbientLight(0xffffff);
      ambientLight.position.set(25, -15, -400);
        
      scene.add(pointLight);
      scene.add(ambientLight);

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    icoMesh.rotation.z += -0.03
    icoMesh.rotation.y += -0.03
        
    renderer.render( scene, camera );
}
animate();


const lightHelper = new THREE.PointLightHelper(pointLight);
        
  scene.add(lightHelper)

const gridHelper = new THREE.GridHelper(200,50);
        
  scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)

const smileTexture = new THREE.TextureLoader().load('images/smile.jpeg')

const sphereGeometry = new THREE.SphereGeometry( 10, 22, 10 );
        
        const smileMaterial = new THREE.MeshBasicMaterial({map: smileTexture})
        
        const smileMesh = new THREE.Mesh(sphereGeometry, smileMaterial);
        
        scene.add(smileMesh);