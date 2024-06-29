import { Frog } from '@airstack/frog'
import { Heading, VStack, vars } from './ui.js'

export const app = new Frog({
  apiKey: process.env.APP_AIRSTACK_API_KEY as string,
  ui: { vars },
  title: '',
  headers: { 'cache-control': 'max-age=0' },
}).frame('/', (c: any) => {
  return c.res({
    image: (
      <VStack grow gap="4">
        <Heading color="text400">
          Current time: {new Date().toISOString()}
        </Heading>
      </VStack>
    ),
  })
})
