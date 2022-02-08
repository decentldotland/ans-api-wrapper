import {
  _getProfile,
  _getAddress,
  _getLabel,
  _getUsersCount,
  _isOwned,
} from "./utils/express-wrappers.js";

export async function getAddress(label) {
  try {
    const res = await _getAddress(label);
    return res;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function getProfile(labelAddress) {
  try {
    const res = await _getProfile(labelAddress);
    return res;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function getLabel(address) {
  try {
    const res = await _getLabel(address);

    return res;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function isOwned(label) {
  try {
    const res = await _isOwned(label);
    return res;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function getUsersCount() {
  try {
    const res = await _getUsersCount();

    return res;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}
