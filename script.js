import * as THREE from 'three';

let sens = 100;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.00001, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const colours = {
  ground: "0, 0, 0",
  square: "0, 0, 255"
}

const light = new THREE.AmbientLight( 0x404040, 100 ); // soft white light
scene.add( light );
scene.background = new THREE.Color( 'FFFFFF' );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const ground = new THREE.BoxGeometry( 0.5, 100, 100 );
const material = new THREE.MeshBasicMaterial( { color: `rgb(${colours.square})` } );
const groundcolour = new THREE.MeshBasicMaterial();
groundcolour.color = new THREE.Color(`rgb(${colours.ground})`); 

const cube = new THREE.Mesh( geometry, material );
const g = new THREE.Mesh( ground, groundcolour );
g.position.y = -1;
g.rotation.z = Math.PI / 2;
scene.add( cube );
scene.add( g);

cube.velocity = {x:1,y:1,z:1};
console.log(cube)
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

function updatePosition(){
  for (let len=scene.children.length,i=0;i<len;i++){
      let child = scene.children[i];
      for (let j of ["x", "y", "z"]) child.position[j] += child.velocity[j];
  }
}


function animate() {
  // console.log(scene.children[0].position)
  // updatePosition();
  requestAnimationFrame( animate );
	renderer.render( scene, camera );
  lockCursor()
}

animate();

function lockCursor() {
  var canvas = document.querySelector('canvas');
    canvas.requestPointerLock();
}

