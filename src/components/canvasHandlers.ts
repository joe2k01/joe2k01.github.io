import { ContactWebGL } from "./contactWebgl";
import { HeroWebGL } from "./heroWebgl";
// import { ContactWebGL } from "./contactWebgl";

const hero = new HeroWebGL();
const contact = new ContactWebGL();

function animate() {
  hero.animate();
  contact.animate();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
