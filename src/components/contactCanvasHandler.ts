import * as THREE from "three";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const canvas = document.getElementById("contactWebgl") as HTMLCanvasElement;
const wrapper = document.getElementById(
  "contactCanvasWrapper"
) as HTMLDivElement;
const contact = document.getElementById("contact") as HTMLAnchorElement;

// Resource loading event
const event = new Event("contactContentLoad");

const dimensions = {
  width: wrapper.clientWidth,
  height: wrapper.clientHeight,
};

// Set up camera
const camera = new THREE.PerspectiveCamera(
  45,
  dimensions.width / dimensions.height,
  1,
  1000
);
camera.position.z = 10;

// Set up Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.setSize(dimensions.width, dimensions.height);
renderer.setClearColor(0x000, 0);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;

// Handle resize
window.addEventListener("resize", () => {
  dimensions.width = wrapper.clientWidth;
  dimensions.height = wrapper.clientHeight;

  // Update camera
  camera.aspect = dimensions.width / dimensions.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(dimensions.width, dimensions.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Set up font loader
const fontLoader = new FontLoader();
// Set up texture loader
const textureLoader = new THREE.TextureLoader();

// Text object
var text: THREE.Mesh | null = null;

// Create scene
const scene = new THREE.Scene();

// Load font
var font: Font | null = null;
fontLoader.load("/source_code_pro_medium.json", (loadedFont) => {
  font = loadedFont;
  canvas.dispatchEvent(event);
});

// Load matcap
var matcap: THREE.Texture | null = null;
textureLoader.load("/matcap2.png", (loadedMatcap) => {
  matcap = loadedMatcap;
  canvas.dispatchEvent(event);
});

canvas.addEventListener("contactContentLoad", () => {
  if (font && matcap) {
    const textGeometry = new TextGeometry("joe2k01dev@gmail.com", {
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    textGeometry.center();

    const textMaterial = new THREE.MeshMatcapMaterial({ matcap });

    text = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(text);
  }
});

let mousePos = {
  x: 0,
  y: 0,
};

function tick() {
  if (text) {
    // Animate text
    text.rotation.set(mousePos.y * 0.4, mousePos.x * 0.4, 0);
  }

  renderer.render(scene, camera);

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

contact.addEventListener("mousemove", (ev) => {
  const pageX = ev.pageX;
  const pageY = ev.pageY;

  const renderX = -1 + 2 * (pageX / contact.scrollWidth);
  const renderY = -1 + 2 * (pageY / contact.scrollHeight);

  mousePos.x = renderX;
  mousePos.y = renderY;
});
