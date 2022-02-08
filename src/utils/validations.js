import { LabelError } from "./errors.js";

export async function _validateLabel(label) {
  const username = label.toLowerCase().trim();
  const dotIndex = username.indexOf(".");

  if (!username.endsWith(".ar")) {
    throw new LabelError();
  }

  if (username.length < 2 || username.length > 15) {
    throw new LabelError();
  }

  return username.slice(0, dotIndex);
}
