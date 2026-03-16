export class SequenceGenerator {
  private static instance: SequenceGenerator;
  private currentId: number;

  private constructor() {
    this.currentId = Date.now();
  }

  static getInstance(): SequenceGenerator {
    if (!this.instance) {
      this.instance = new SequenceGenerator();
    }
    return this.instance;
  }

  generateId(): string {
    this.currentId += 1;
    return this.currentId.toString();
  }
}
