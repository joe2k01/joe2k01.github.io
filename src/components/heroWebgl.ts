import {
  AmbientLight,
  Group,
  HemisphereLight,
  LoadingManager,
  PointLight,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SCREEN_LG, SCREEN_MD } from "./screenCostants";
import { WebGLAbstract } from "./webGLAbstract";

export class HeroWebGL extends WebGLAbstract {
  private gltfLoader: GLTFLoader;

  private gigante: Group | null = null;

  private movingLights: {
    lightA: PointLight | null;
    lightB: PointLight | null;
  } = { lightA: null, lightB: null };

  constructor(loadingManager: LoadingManager) {
    const canvas = document.getElementById("webgl") as HTMLCanvasElement;
    const hero = document.getElementById("hero_fragment") as HTMLDivElement;

    super(canvas, hero, loadingManager);

    this.gltfLoader = new GLTFLoader(this.loadingManager);

    // Create scene
    this.createScene();

    // Handle interactivity
    this.interact();
  }

  createScene() {
    // Load Gigante model
    this.gltfLoader.load("/gigante-monte-prama/untitled.glb", (gltf) => {
      this.gigante = gltf.scene;
      this.gigante.scale.set(30, 30, 30);

      // Add gigante to scene
      this.scene.add(this.gigante);

      // Render scene before completing loading
      this.renderer.render(this.scene, this.camera);
    });

    // Lights
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    const hemisphereLight = new HemisphereLight(0x5448c8, 0xff2e00, 5);
    const lightA = new PointLight(0x5448c8, 4, 0, 0);
    const lightB = new PointLight(0xff2e00, 4, 0, 0);
    lightA.position.z = 20;
    lightB.position.z = 20;
    hemisphereLight.position.set(0, 0, 0);

    // Add lights to scene
    this.scene.add(ambientLight);
    this.scene.add(hemisphereLight);
    this.scene.add(lightA);
    this.scene.add(lightB);

    // Store lights in set
    this.movingLights.lightA = lightA;
    this.movingLights.lightB = lightB;
  }

  interact() {
    // Track mouse so that gigante can look at it
    this.wrapper.addEventListener("mousemove", (ev) => {
      if (window.innerWidth > SCREEN_LG) {
        const pageX = ev.pageX;
        const pageY = ev.pageY;

        const renderX = -1 + 2 * (pageX / this.canvas.scrollWidth);
        const renderY = -1 + 2 * (pageY / this.canvas.scrollHeight);

        this.mousePos.x = renderX;
        this.mousePos.y = renderY;
      }
    });
  }

  positionCamera(): void {
    if (window.innerWidth > SCREEN_MD) {
      this.camera.position.z = 50;
    } else {
      this.camera.position.z = 60;
    }
  }

  public animate() {
    if (this.gigante) {
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
      const lightsX = 20 * this.mousePos.x;
      const lightsY = 20 * -this.mousePos.y;

      // Animate gigante
      this.gigante.rotation.set(
        this.mousePos.y * 0.4,
        this.mousePos.x * 0.4 + rotation,
        0
      );

      // Animate light
      if (this.movingLights.lightA) {
        this.movingLights.lightA.position.x = lightsX;
        this.movingLights.lightA.position.y = lightsY;
      }
      if (this.movingLights.lightB) {
        this.movingLights.lightB.position.x = -lightsX;
        this.movingLights.lightB.position.y = -lightsY;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}
