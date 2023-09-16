export class THREELoadingEvent extends Event {
  progress: number;

  constructor(eventInitDict: EventInit) {
    super("threeloading", eventInitDict);
    this.progress = 0;
  }
}
