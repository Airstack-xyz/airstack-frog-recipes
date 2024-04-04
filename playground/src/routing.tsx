import { Frog } from '@airstack/frog'

export const app = new Frog({
  apiKey: process.env.AIRSTACK_API_KEY as string,
})

app.frame('/:name?', (c) => {
  const name = c.req.param('name')
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        gm, {name ?? 'froggie'}
      </div>
    ),
  })
})
