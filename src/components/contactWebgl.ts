import { WebGLAbstract } from "./webGLAbstract";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { TextureLoader, Mesh, MeshMatcapMaterial } from "three";
import { SCREEN_LG } from "./screenCostants";

export class ContactWebGL extends WebGLAbstract {
  private event: Event;

  private fontLoader: FontLoader;
  private textureLoader: TextureLoader;
  private text: THREE.Object3D | null = null;

  private contact: HTMLDivElement;

  constructor() {
    const canvas = document.getElementById("contactWebgl") as HTMLCanvasElement;
    const wrapper = document.getElementById(
      "contactCanvasWrapper"
    ) as HTMLAnchorElement;

    super(canvas, wrapper);

    this.contact = document.getElementById("contact") as HTMLDivElement;

    // Resource loading event
    this.event = new Event("contactContentLoad");

    // Create font loader
    this.fontLoader = new FontLoader();
    // Create texture loader
    this.textureLoader = new TextureLoader();

    // Create scene
    this.createScene();

    // Handle interactivity
    this.interact();
  }

  protected positionCamera(): void {
    if (window.innerWidth > SCREEN_LG) {
      this.camera.position.z = 10;
    } else {
      this.camera.position.z = 12;
    }
  }

  private createScene() {
    // Load font
    var font: Font | null = null;
    this.fontLoader.load("/source_code_pro_medium.json", (loadedFont) => {
      font = loadedFont;
      this.canvas.dispatchEvent(this.event);
    });

    // Load matcap
    var matcap: THREE.Texture | null = null;
    this.textureLoader.load("/matcap2.png", (loadedMatcap) => {
      matcap = loadedMatcap;
      this.canvas.dispatchEvent(this.event);
    });

    this.canvas.addEventListener("contactContentLoad", () => {
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

        const textMaterial = new MeshMatcapMaterial({ matcap });

        this.text = new Mesh(textGeometry, textMaterial);
        this.scene.add(this.text);
      }
    });
  }

  private interact() {
    this.contact.addEventListener("mousemove", (ev) => {
      const rect = this.contact.getBoundingClientRect();
      const pageX = ev.clientX - rect.left;
      const pageY = ev.clientY - rect.top;

      const renderX = -1 + 2 * (pageX / this.contact.scrollWidth);
      const renderY = -1 + 2 * (pageY / this.contact.scrollHeight);

      this.mousePos.x = renderX;
      this.mousePos.y = renderY;
    });
  }

  animate(): void {
    if (this.text) {
      // Animate text
      this.text.rotation.set(this.mousePos.y * 0.4, this.mousePos.x * 0.4, 0);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
