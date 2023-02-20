import { graphConfig } from './authConfig'

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
const callMsGraph = async (accessToken: string) => {
  const headers = new Headers()
  const bearer = `Bearer ${accessToken}`

  headers.append('Authorization', bearer)

  const options = {
    method: 'GET',
    headers
  }

  return fetch(new URL(graphConfig.graphMeEndpoint), options)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export default callMsGraph
