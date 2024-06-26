import { Button, Frog } from '@airstack/frog'
import { Heading, VStack, vars } from './ui.js'

export const app = new Frog({
  apiKey: process.env.AIRSTACK_API_KEY as string,
  ui: { vars },
  title: 'Initial',
})
  .frame('/', (c) => {
    return c.res({
      image: '/refreshing-image/cool-parameter',
      intents: [<Button>Check again</Button>],
    })
  })
  .image('/refreshing-image/:param', (c) => {
    return c.res({
      imageOptions: {
        headers: {
          'Cache-Control': 'max-age=0',
        },
      },
      image: (
        <VStack grow gap="4">
          <Heading color="text400">
            Current time: {new Date().toISOString()}
          </Heading>
        </VStack>
      ),
    })
  })
