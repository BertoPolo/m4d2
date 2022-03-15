import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import LatestReleases from "./components/LatestReleases"

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
