
<p align="center">
  <a href="https://decent.land">
    <img src="./src/img/logo25.png" height="124">
  </a>
  <h3 align="center"><code>@decentdotland/ans-api-wrapper</code></h3>
  <p align="center">API wrapper for ANS node server</p>
</p>

## Synopsis
ES6 API wrapper for ANS protocol for reading the ANS Smartweave contract state.  

## Getting Started

### Installation

```sh
npm install -g ans-api

```

## Usage

### Get a user profile

```js
import { getProfile } from "ans-api-wrapper";

const label = "decentland.ar";
const address = "...43-char-string...";

async function loadProfile() {
  const profile = await getProfile(label || address);

  return profile;
}

```

### Resolving a label/domain

```js
import { getAddress } from "ans-api-wrapper";

const label = "decentland.ar";

async function addressOf(label) {
  const address = await getAddress(label);

  return address;
}

```


## Contributing

If you have a suggestion that would make this protocol or the API better, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/xyz`)
3. Commit your Changes (`git commit -m 'feat: abc-xyz'`)
4. Push to the Branch (`git push origin feature/xyz`)
5. Open a Pull Request

Contributions are **greatly appreciated** !
## License
This protocol is licensed under the [MIT license](./LICENSE).
