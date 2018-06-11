import THREE from '../js/vendor/three.module.js';
import OrbitControls from '../js/vendor/orbitControls.module.js';

import {
	renderer,
	getCamera,
	getAmbientLight,
	getGridHelper,
	getAxesHelper
} from '../js/scene.js';

// const canvas = renderer.domElement;
const camera = getCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
const controls = new OrbitControls( camera );
let trunkMesh, trunkGeometry, trunkHeight;
let params = { 
	height : 0
}

new TWEEN.Tween( params )
    .to( { height: 40}, 3000 )
    .onUpdate(function(){
    	trunkMesh.scale.y = params.height;
		trunkMesh.position.set(0, trunkMesh.scale.y/2, 0);
    })
    .start();

initScene();
renderTree(2, 0, Math.PI / 4);
// renderTree(2, 0, Math.PI / 4);
animate();

/*
 * Returns true if a given number n is Even
 */
// isEven = (n) => n % 2 === 0;

/*
 * Set up and show Javascript Performance Monitor
 */
function showStats(){
    stats = new Stats();
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( stats.dom );
}



/*
 * Sets basic 3D Scene Elements
 */
function initScene(){
	/**
	 * Render grid and XYZ Axis Helpers
	 */
	scene.add( getGridHelper(50, 5, '#000000') );
	scene.add( getAxesHelper(50) );
	scene.add( getAmbientLight(0x404040) );

	camera.position.set(0, 40, 70);
	camera.lookAt(0, 0, 0);
	document.body.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );
}

/*
 * Handles window resize events
 */
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

/**
 * Updates objects on each frame
 */
function animate(){
    requestAnimationFrame( animate );

    // stats.begin();

    renderer.render( scene, camera );
	// trunkGeometry.parameters.height = trunkHeight;

	trunkMesh.geometry.verticesNeedUpdate = true;
	// trunkGeometry.parameters.height = params.x;
		
    // stats.end();
    TWEEN.update();
}

/**
 * render Tree 
 * @param {Number} trunkRadius
 * @param {Number} trunkHeight
 * @param {Number} angle
 * CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer);
 * mesh.rotation.set(0, 90, 180);
 */
 function renderTree(trunkRadius, trunkHeight, angle){
 	let initialHeight, maxHeight, heightTween;
	let branchGeometry, branchhMesh, branchHeight;


	trunkGeometry = new THREE.CylinderGeometry( trunkRadius, trunkRadius, trunkHeight, 10, 10);

	// trunkGeometry.translate(0, trunkHeight/2, 0);
	let woodMaterial = new THREE.MeshBasicMaterial( {
		color: 0x8B4513,
		wireframe : true
	} );

	trunkMesh = new THREE.Mesh( trunkGeometry, woodMaterial );
	// trunkMesh.position.set(0, trunkHeight/2, 0);
	// console.log(trunkMesh.geometry.parameters.height);
	scene.add( trunkMesh );


	// initialHeight = {y : 0};
 // 	maxHeight = { value : trunkHeight};

 // 	heightTween = new TWEEN.Tween(initialHeight)
 // 		.to({y : maxHeight}, 3000)
 // 		.onUpdate(function(){
	// 		initialHeight = trunkHeight;
	// 		// trunkGeometry.parameters.height = trunkHeight;
	// 		// console.log(trunkGeometry);
	// 	});

 // 	heightTween.start();





	// branchHeight = trunkHeight * 0.8;
	// branchGeometry = new THREE.CylinderGeometry( trunkRadius*0.8, trunkRadius*0.8, branchHeight, 10, 10);
	// branchGeometry.translate(0, branchHeight/2, 0);
	// branchhMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	// branchhMesh.position.set(0, trunkHeight, 0);
	// // branchhMesh.rotation.set(Math.PI / 4, 0, 0);
	// // branchhMesh.rotation.set(Math.PI / 4, 0, 0);
	// branchhMesh.rotation.set(0, 0, angle);
	// scene.add( branchhMesh );

	// branchhMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	// branchhMesh.position.set(0, trunkHeight, 0);
	// branchhMesh.rotation.set(angle, 0, 0);
	// scene.add( branchhMesh );

	// branchhMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	// branchhMesh.position.set(0, trunkHeight, 0);
	// branchhMesh.rotation.set(-angle, 0, 0);
	// scene.add( branchhMesh );

	// branchhMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	// branchhMesh.position.set(0, trunkHeight, 0);
	// branchhMesh.rotation.set(0, 0, -angle);
	// scene.add( branchhMesh );

 }
