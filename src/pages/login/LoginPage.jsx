import { LoginForm } from "./components";
import {NavBar} from '../home/components'

export function LoginPage() {
  return (
    <>
      <nav>
      <NavBar />
      </nav>
      <main>
        <LoginForm/>
      </main>
    </>
  )
}
