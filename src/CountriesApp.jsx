import AppRouter from "./router/AppRouter"
import {CountriesContextProvider} from "./Context"

function App() {
  return (
    <>
      <CountriesContextProvider>
        <AppRouter />
      </CountriesContextProvider>
    </>
  )
}

export default App
