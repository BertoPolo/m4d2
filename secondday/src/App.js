import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./Welcome"
import LatestReleases from "./components/LatestReleases"
import { Row } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <MyNav />

      <Welcome />

      <LatestReleases />

      <MyFooter />
    </div>
  )
}

export default App
