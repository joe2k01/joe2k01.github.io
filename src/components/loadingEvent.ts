export class THREELoadingEvent extends Event {
  giganteProgress: number;
  nameProgress: number;

  constructor(eventInitDict: EventInit) {
    super("threeloading", eventInitDict);
    this.giganteProgress = 0;
    this.nameProgress = 0;
  }
}
