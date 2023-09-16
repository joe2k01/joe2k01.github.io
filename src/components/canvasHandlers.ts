import { LoadingManager } from "three";
import { ContactWebGL } from "./contactWebgl";
import { HeroWebGL } from "./heroWebgl";
import { THREELoadingEvent } from "./loadingEvent";

const loadingManager = new LoadingManager();
const loadingEvent = new THREELoadingEvent({
  bubbles: false,
  cancelable: false,
});

const hero = new HeroWebGL(loadingManager);
const contact = new ContactWebGL(loadingManager);

loadingManager.onProgress = (_, loaded, total) => {
  loadingEvent.progress = (loaded / total) * 100;
  window.dispatchEvent(loadingEvent);
};

function animate() {
  hero.animate();
  contact.animate();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
