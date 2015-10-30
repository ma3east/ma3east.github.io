console.log('javascript is ready');

var camera, 
scene, 
renderer, 
geometry, 
cube, 
material, 
cubeImage,
hemiLight;

var cubeContainer = document.getElementById('myCanvas');
var width = cubeContainer.offsetWidth;
var height = cubeContainer.offsetHeight;

var materials = [];

function init() {

  if ( webglAvailable === false ) {
    noWebGl();
  } else {
   console.log('webGL available in this browser');
  }

  scene = new THREE.Scene();
  
  // camera
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.z = 1200;

  // use images for the cube materials
  cubeImage1 = THREE.ImageUtils.loadTexture('../img/cube/GA.png');
  cubeImage2 = THREE.ImageUtils.loadTexture('../img/cube/js.png');
  cubeImage3 = THREE.ImageUtils.loadTexture('../img/cube/keep_calm.png');
  cubeImage4 = THREE.ImageUtils.loadTexture('../img/cube/HTML5CSS3.jpg');
  cubeImage5 = THREE.ImageUtils.loadTexture('../img/cube/Octocat.png');
  cubeImage6 = THREE.ImageUtils.loadTexture('../img/cube/Code.png');

  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage1 })); // right face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage2 })); // left face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage3 })); // top face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage4 })); // bottom face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage5 })); // front face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage6 })); // back face

  material = new THREE.MeshFaceMaterial(materials);

  // cube geometry
  geometry = new THREE.BoxGeometry(300, 300, 300);

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  // renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true 
  });
  renderer.setSize(width, height);

  // sets canvas color
  renderer.setClearColor(0xffffff, 0);
  
  cubeContainer.appendChild(renderer.domElement);

  // Add light
  addLights();

  // code to resize animation 
  THREEx.WindowResize(renderer, camera);
  animate();
}
function webglAvailable() {
  try {
    var canvas = cubeContainer;
    return !!
    window.WebGLRenderingContext && 
    (canvas.getContext("webgl") || 
      canvas.getContext("experimental-webgl"));
  } catch(e) { 
    return false;
  } 
}

function noWebGl (){
  var elem = document.createElement('img');
  elem.setAttribute('src', '../img/public/ga.png');

  // webglAvailable() === false ? cubeContainer.appendChild(elem) : init();
  cubeContainer.appendChild(elem);
}

function addLights() {
  hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
  scene.add( hemiLight );
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  cube.rotation.x -= 0.02;
  cube.rotation.y += 0.01;
  cube.rotation.z -= 0.01;
  render();
  requestAnimationFrame(animate);
}

window.onload = init();
