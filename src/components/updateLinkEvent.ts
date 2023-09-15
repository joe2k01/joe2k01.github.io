export class UpdateLinkEvent extends Event {
  activeImage: string;

  constructor(activeImage: string, eventInitDict: EventInit) {
    super("updatelink", eventInitDict);
    this.activeImage = activeImage;
  }
}
