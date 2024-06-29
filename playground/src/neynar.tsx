import { Button, Frog } from '@airstack/frog'

export const app = new Frog({
  apiKey: process.env.AIRSTACK_API_KEY as string,
  title: "Airstack"
}).frame('/', (c) => {
  return c.res({
    action: '/guess',
    image: (
      <div
        style={{
          alignItems: 'center',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 48,
          height: '100%',
          width: '100%',
        }}
      >
        I can guess your name and follower count.
      </div>
    ),
    intents: [<Button>Go on</Button>],
  })
})
