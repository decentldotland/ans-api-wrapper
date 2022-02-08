import { _validateLabel } from "./validations.js";
import { SERVER_ENDPOINT_1 } from "./constants.js";
import axios from "axios";

async function req(request) {
  try {
    const res = (await axios.get(`${SERVER_ENDPOINT_1}${request}`)).data;
    return res;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function _getProfile(labelAddress) {
  try {
    if (labelAddress.length < 43) {
      labelAddress = await _validateLabel(labelAddress);
    }
    const profile = await req(`/profile/${labelAddress}`);
    return profile;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function _getAddress(label) {
  try {
    const validatedLabel = await _validateLabel(label);
    const address = await req(`/address/${validatedLabel}`);

    return address;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function _getLabel(address) {
  try {
    const profile = await req(`/profile/${address}`);

    return { res: profile?.currentLabel };
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function _isOwned(label) {
  try {
    const validatedLabel = await _validateLabel(label);
    const isOwned = await req(`/isowned/${validatedLabel}`);

    return isOwned;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function _getUsersCount() {
  try {
    const usersCount = await req(`/users`);
    return usersCount;
  } catch(error) {
    console.log(`${error.name} : ${error.description}`);
  }
}