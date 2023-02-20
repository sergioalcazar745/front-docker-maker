import PageLayout from './layouts/PageLayout'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal
} from '@azure/msal-react'
import { useState } from 'react'
import { loginRequest } from './authConfig'
import ProfileData from './components/ProfileData'
import callMsGraph from './graph'

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
const ProfileContent = () => {
  const { instance, accounts } = useMsal()
  const [graphData, setGraphData] = useState(null)

  const name = accounts[0] && accounts[0].name

  const RequestProfileData = () => {
    const request = {
      ...loginRequest,
      account: accounts[0]
    }

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response:any) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        )
      })
      .catch((e:any) => {
        instance.acquireTokenPopup(request).then((response:any) => {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          )
        })
      })
  }

  return (
    <>
      <h5 className="card-title">Welcome {name}</h5>
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={RequestProfileData}
        >
          Request Profile Information
        </button>
      )}
    </>
  )
}
/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const App = () => {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        {/* <p>You are not signed in! Please sign in.</p> */}
      </UnauthenticatedTemplate>
    </PageLayout>
  )
}

export default App
