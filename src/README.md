<br/>

<p align="center">
  <a href="https://airstack.xyz">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.png">
      <img alt="frog logo" src="./assets/logo-light.png" width="auto" height="150">
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://frog.fm">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/wevm/frog/blob/main/.github/logo-dark.png">
      <img alt="frog logo" src="https://github.com/wevm/frog/blob/main/.github/logo-light.png" width="auto" height="90">
    </picture>
  </a>
</p>

<p align="center">
  Airstack Flavour 🐸 Framework for Farcaster Frames
<p>

<p align="center">
  <a href="https://www.npmjs.com/package/frog">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/frog?colorA=21262d&colorB=21262d&style=flat">
      <img src="https://img.shields.io/npm/v/frog?colorA=f6f8fa&colorB=f6f8fa&style=flat" alt="Version">
    </picture>
  </a>
  <a href="https://github.com/airstack-xyz/airstack-frog-recipes/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/l/frog?colorA=21262d&colorB=21262d&style=flat">
      <img src="https://img.shields.io/npm/l/frog?colorA=f6f8fa&colorB=f6f8fa&style=flat" alt="MIT License">
    </picture>
  </a>
</p>

## Get Started

```
npm i @airstack/frog
```

## Migration from Frog

The Airstack Frog Recipe contains all the features that are supported in the [Frog](https://frog.fm) Framework.

Therefore you can simply change the import of any Frog functions from `frog` to `@airstack/frog` and provide an [Airstack API key](https://app.airstack.xyz/profile-settings/api-keys) when creating new Frog instances:

```ts
// Using Frog (initial)
import { Frog } from "frog";

export const app = new Frog();

// Using Airstack Frog Recipe (after migration)
import { Frog } from "@airstack/frog";

export const app = new Frog({
  apiKey: process.env.AIRSTACK_API_KEY as string,
});
```

## Learn More

[Head to the documentation](https://frog.fm/) to read and learn more about Frog.

## Developer Support

If you need any help or assistance in building your Farcaster Frame using Airstack Frog Recipes, you can get in touch with us on our [Telegram](https://t.me/+1k3c2FR7z51mNDRh).

## Contributing

If you're interested in contributing, please read the [contributing docs](/.github/CONTRIBUTING.md) **before submitting a pull request**.

## License

[MIT](/LICENSE) License
