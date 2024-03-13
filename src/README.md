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
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/@airstack/frog?colorA=21262d&colorB=21262d&style=flat">
      <img src="https://img.shields.io/npm/v/@airstack/frog?colorA=f6f8fa&colorB=f6f8fa&style=flat" alt="Version">
    </picture>
  </a>
  <a href="https://github.com/airstack-xyz/airstack-frog-recipes/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/l/@airstack/frog?colorA=21262d&colorB=21262d&style=flat">
      <img src="https://img.shields.io/npm/l/@airstack/frog?colorA=f6f8fa&colorB=f6f8fa&style=flat" alt="MIT License">
    </picture>
  </a>
</p>

## Get Started

To get started, simply install the Airstack Frog Recipe:

```sh
npm i @airstack/frog hono
```

and create a new Frog instance with [Airstack API key](https://app.airstack.xyz/profile-settings/api-keys) (required) provided as an input:

```ts
import { Frog } from "@airstack/frog";

export const app = new Frog({
  apiKey: process.env.AIRSTACK_API_KEY as string,
});
```

## Learn More

The Airstack Frog Recipes inherit all the functionalities that [Frog Framework](https://frog.fm) offers, with the integration of Airstack features.

For all Frog functionalities, head to [Frog documentation](https://frog.fm/) to read and learn more about Frog.

For all Airstack features included in Airstack Frog Recipes, you can find more information about it [here](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/airstack-frog-recipes).

## Developer Support

If you need any help or assistance in building your Farcaster Frame using Airstack Frog Recipes, you can get in touch with us on our [Telegram](https://t.me/+1k3c2FR7z51mNDRh).

## Contributing

If you're interested in contributing, please read the [contributing docs](/.github/CONTRIBUTING.md) **before submitting a pull request**.

## License

[MIT](/LICENSE) License
