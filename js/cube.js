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

   if ( webglAvailable() === true ) {

     console.log('webGL is available in this browser');  
   } 
   if ( webglAvailable() === false ) {
    console.log('webGL is not available');
    
    noWebGl();
  }


 //  if ( webglAvailable() === true ) {

 //    console.log('webGL is available in this browser');

 //    dummy();
    
 //  } else {
 //   console.log('webGL is not available');
   
 //   noWebGl();
 // }

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

function dummy() {
  
}

function webglAvailable() {
  try {
    var canvas = cubeContainer;
    
    return !!
    window.WebGLRenderingContext && 
    (canvas.getContext("webgl") || 
      canvas.getContext("experimental-webgl"));
  } catch(e) { 
    console.log(e); 
    return false;
  } 
}

function noWebGl (){
  var elem = document.createElement('img');
  var noCanvas = cubeContainer;

  elem.setAttribute('src', '../img/public/ga.png');

  noCanvas.appendChild(elem);
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

// the below works in the init function for non canvas ie ga logo displlayhed, but when canvase get both!

//  if ( webglAvailable() === true ) {

//    console.log('webGL is available in this browser');
   
//  } else {
//   console.log('webGL is not available');
  
//   noWebGl();
// }

