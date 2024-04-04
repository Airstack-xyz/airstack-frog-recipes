import { Frog } from '@airstack/frog'
import { Heading, VStack, vars } from './ui.js'

export const app = new Frog({
  apiKey: process.env.APP_AIRSTACK_API_KEY as string,
  ui: { vars },
}).frame('/', (c) => {
  return c.res({
    image: (
      <VStack grow gap="4">
        <Heading>Open Sans (normal)</Heading>
        <Heading weight="600">Open Sans (bold)</Heading>
        <Heading font="madimi">Madimi One</Heading>
      </VStack>
    ),
  })
})
