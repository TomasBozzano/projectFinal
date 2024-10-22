import { ProductsPage } from "../products/ProductsPage";
import { NavBar } from "./components";


export function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ProductsPage />
      </main>
    </>
  )
}
