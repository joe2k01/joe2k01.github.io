import { ContactWebGL } from "./contactWebgl";
import { HeroWebGL } from "./heroWebgl";

const hero = new HeroWebGL();
const contact = new ContactWebGL();

function animate() {
  hero.animate();
  contact.animate();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
