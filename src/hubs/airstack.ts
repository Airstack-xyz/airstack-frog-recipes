import { config } from '../config.js'
import { createHub } from './utils.js'

export type AirstackHubParameters = {
  apiKey: string
}

export const airstack = createHub((parameters: AirstackHubParameters) => {
  const { apiKey } = parameters
  return {
    apiUrl: 'https://hubs.airstack.xyz',
    fetchOptions: {
      headers: {
        'x-airstack-hubs': apiKey ? apiKey : config.authKey,
      },
    },
  }
})
