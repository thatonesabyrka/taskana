import { NavBar } from './NavBar'
import { IncomingTasks } from '../pages/IncomingTasks'
import { SideBar } from './SIdeBar'

export function Content() {
  return (
    <div>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </div>
  )
}