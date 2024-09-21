
import './app.scss';
// eslint-disable-next-line no-unused-vars
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
function App() {
  return (
      <div>
        <Navbar />
        <Header />
         <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </div>
  )
}

export default App
