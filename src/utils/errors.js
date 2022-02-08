export class LabelError extends Error {
  constructor(message) {
    super(message);
    this.name = "LabelError";
    this.description = "the label must have a valid label format: 'label.ar'"
  }
}