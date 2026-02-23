// PREVA 3D Hero Animation
// Brand Colors: Hero Dark #1A1A2E, Sunlight #E4C8A8

const canvas = document.getElementById('hero-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Fog to fade distant particles into the background color (Hero Dark)
scene.fog = new THREE.FogExp2(0x1A1A2E, 0.002);

// Create Particle System
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 2000; // Number of dots

const posArray = new Float32Array(particlesCount * 3);

// Spread particles in a wide field
for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 25; // Random spread
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Material: Sunlight dots
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.04,
    color: 0xE4C8A8, // Brand Sunlight
    transparent: true,
    opacity: 0.8,
});

// Mesh
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 5;

// Mouse Interaction
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    const elapsedTime = clock.getElapsedTime();

    // Gentle rotation of the entire field
    particlesMesh.rotation.y = elapsedTime * 0.05;
    particlesMesh.rotation.x = -mouseY * 0.0001; // Subtle tilt with mouse
    particlesMesh.rotation.y += mouseX * 0.0001; // Add mouse influence to rotation

    // Waving effect (Undulation)
    // We access the positions array directly to animate waves
    // Note: For performance on a simple grid, rotation is often enough, 
    // but here we let the whole cloud drift.
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
