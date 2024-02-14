import * as THREE from 'three';

let sens = 100;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0x404040, 100 ); // soft white light
scene.add( light );
scene.background = new THREE.Color( 0xff0000 );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const ground = new THREE.BoxGeometry( 100, 100, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const g = new THREE.Mesh( ground, material );
scene.add( cube );
scene.add( g);

camera.position.z = 5;
document.onmousemove = function(e){
    camera.rotation.x -= e.movementY / sens;
    camera.rotation.y -= e.movementX / sens;
  }

window.addEventListener("keydown", function (e) {
  switch (e.key){
    case 'W':
      
    case 'S':

    case 'A':

    case 'D':
  }}
);
let vy = 1;
function animate() {
  // console.log(scene.children[0].position)
  requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();

