import { PropsWithChildren } from 'react'
import Sidebar from '../components/SideBar';

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
const PageLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Sidebar />
      {props.children}
    </>
  )
}

export default PageLayout
