import { useMsal } from '@azure/msal-react'

interface Props {
  classes: string
}

/**
 * Renders a button which, when selected, will redirect the page to the logout or open a popup for logout
 */
const SignOutButton = ({ classes }: Props) => {
  const { instance } = useMsal()

  const handleLogout = (logoutType: string) => {
    if (logoutType === 'redirect') {
      instance.logoutRedirect({
        postLogoutRedirectUri: '/'
      })
    } else if (logoutType === 'popup') {
      instance.logoutPopup({
        postLogoutRedirectUri: '/',
        mainWindowRedirectUri: '/' // redirects the top level app after logout
      })
    }
  }

  return (
    <>
      <div className={classes} onClick={() => handleLogout('popup')}>
        Sign out using Popup
      </div>
      <div className={classes} onClick={() => handleLogout('redirect')}>
        Sign out using redirect
      </div>
    </>
  )
}

export default SignOutButton
