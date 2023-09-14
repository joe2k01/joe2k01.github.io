import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

export abstract class WebGLAbstract {
  protected canvas: HTMLCanvasElement;
  protected wrapper: HTMLElement;

  protected camera: THREE.PerspectiveCamera;
  protected renderer: THREE.WebGLRenderer;
  protected scene: THREE.Scene;

  protected mousePos = {
    x: 0,
    y: 0,
  };

  private dimensions = { width: 0, height: 0 };

  constructor(canvas: HTMLCanvasElement, wrapper: HTMLElement) {
    this.canvas = canvas;
    this.wrapper = wrapper;

    this.setDimensions();

    // Create camera
    this.camera = new PerspectiveCamera(
      45,
      this.dimensions.width / this.dimensions.height,
      1,
      1000
    );
    // Update camera
    this.updateCamera();

    // Set up Renderer
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setClearColor(0x000, 0);
    this.updateRenderer();

    // Register resize handler
    this.registerResize();

    // Create scene
    this.scene = new Scene();
  }

  protected abstract positionCamera(): void;

  private setDimensions() {
    this.dimensions = {
      width: this.wrapper.clientWidth,
      height: this.wrapper.clientHeight,
    };
  }

  private updateCamera() {
    this.camera.aspect = this.dimensions.width / this.dimensions.height;
    this.camera.updateProjectionMatrix();

    this.positionCamera();
  }

  private updateRenderer() {
    this.renderer.setSize(this.dimensions.width, this.dimensions.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  private registerResize() {
    // Handle window resize event
    window.addEventListener("resize", () => {
      // Store new dimensions
      this.setDimensions();

      // Update camera
      this.updateCamera();

      // Update renderer
      this.updateRenderer();
    });
  }

  abstract animate(): void;
}
