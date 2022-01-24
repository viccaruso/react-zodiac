import './App.css'
import Footer from './Footer/Footer'
import Main from './Main/Main'
import Header from './Header/Header'
import { zodiac } from './data'


function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Header name='Vic' />
      <Main zodiacs={zodiac} />
      <Footer year='2022' />
    </div>
  )
}

export default App
