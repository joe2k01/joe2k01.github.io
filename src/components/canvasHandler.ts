import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const canvas = document.getElementById("webgl") as HTMLCanvasElement;
const hero = document.getElementById("hero_fragment") as HTMLDivElement;

const dimensions = {
  width: hero.scrollWidth,
  height: hero.scrollHeight,
};

// Model loader
const gltfLoader = new GLTFLoader();

// Set up camera
const camera = new THREE.PerspectiveCamera(
  45,
  dimensions.width / dimensions.height,
  1,
  1000
);
if (window.innerWidth > 768) {
  camera.position.z = 50;
} else {
  camera.position.z = 60;
}

// Set up Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(dimensions.width, dimensions.height);
renderer.setClearColor(0x000, 0);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Handle window resize event
window.addEventListener("resize", () => {
  // Store new dimensions
  dimensions.width = hero.scrollWidth;
  dimensions.height = hero.scrollHeight;

  // Update camera
  camera.aspect = dimensions.width / dimensions.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(dimensions.width, dimensions.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Move camera
  if (window.innerWidth > 768) {
    camera.position.z = 50;
  } else {
    camera.position.z = 60;
  }
});

// Create scene
const scene = new THREE.Scene();

// Load Gigante model
let gigante: THREE.Object3D | null = null;
gltfLoader.load("/gigante-monte-prama/untitled.glb", (gltf) => {
  gigante = gltf.scene;
  gigante.scale.set(30, 30, 30);

  // Add gigante to scene
  scene.add(gigante);
});

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const hemisphereLight = new THREE.HemisphereLight(0x5448c8, 0xff2e00, 5);
const lightA = new THREE.PointLight(0x5448c8, 4, 0, 0);
const lightB = new THREE.PointLight(0xff2e00, 4, 0, 0);
lightA.position.z = 20;
lightB.position.z = 20;
hemisphereLight.position.set(0, 0, 0);

// Add camera and lights to scene
scene.add(camera);
scene.add(ambientLight);
scene.add(hemisphereLight);
scene.add(lightA);
scene.add(lightB);

let mousePos = {
  x: 0,
  y: 0,
};

function tick() {
  if (gigante) {
    // Get current scroll
    const rotationPercentage = parseInt(
      document.documentElement.style.getPropertyValue(
        "--second-bg-color-percentage"
      )
    );

    // Calculate gigante rotation based on scroll
    const rotation =
      (Math.PI * (rotationPercentage > 0 ? rotationPercentage : 1)) / 100;

    // Calculate lights position
    const lightsX = 20 * mousePos.x;
    const lightsY = 20 * -mousePos.y;

    // Animate gigante
    gigante.rotation.set(mousePos.y * 0.4, mousePos.x * 0.4 + rotation, 0);

    // Animate light
    lightA.position.x = lightsX;
    lightA.position.y = lightsY;
    lightB.position.x = -lightsX;
    lightB.position.y = -lightsY;
  }

  renderer.render(scene, camera);

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

// Track mouse so that gigante can look at it
hero.addEventListener("mousemove", (ev) => {
  const pageX = ev.pageX;
  const pageY = ev.pageY;

  const renderX = -1 + 2 * (pageX / canvas.scrollWidth);
  const renderY = -1 + 2 * (pageY / canvas.scrollHeight);

  mousePos.x = renderX;
  mousePos.y = renderY;
});
