import { NavBar } from '../home/components';
import { RegisterForm } from './components';

export function RegisterPage() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <RegisterForm/>
      </main>
    </>
  )
}
