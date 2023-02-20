import { useMsal } from '@azure/msal-react'
import { loginRequest } from '../authConfig'

interface Props {
  classes: string
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
const SignInButton = ({ classes }: Props) => {
  const { instance } = useMsal()

  const handleLogin = (loginType: string) => {
    if (loginType === 'popup') {
      instance.loginPopup(loginRequest).catch((e:any) => {
        console.log(e)
      })
    } else if (loginType === 'redirect') {
      instance.loginRedirect(loginRequest).catch((e:any) => {
        console.log(e)
      })
    }
  }

  return (
    <>
      <div className={classes} onClick={() => handleLogin('popup')}>
        Sign in using Popup
      </div>
      <div className={classes} onClick={() => handleLogin('redirect')}>
        Sign in using redirect
      </div>
    </>
  )
}

export default SignInButton
