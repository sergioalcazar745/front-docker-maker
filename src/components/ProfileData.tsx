import React from 'react'

type GraphData = {
  givenName: string
  surname: string
  userPrincipalName: string
  id: string
}

interface IProps {
  graphData: GraphData
}

/**
 * Renders information about the user obtained from Microsoft Graph
 */
const ProfileData = ({ graphData }: IProps) => {
  return (
    <div id="profile-div">
      <p>
        <strong>First Name: </strong> {graphData.givenName}
      </p>
      <p>
        <strong>Last Name: </strong> {graphData.surname}
      </p>
      <p>
        <strong>Email: </strong> {graphData.userPrincipalName}
      </p>
      <p>
        <strong>Id: </strong> {graphData.id}
      </p>
    </div>
  )
}

export default ProfileData
