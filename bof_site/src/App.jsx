import './App.css'
import AboutUs from './components/AboutUs';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import './font.css'

const App = () => {

  return (
    <div>
      <Header/>
      <Hero/>
      <Divider subtitle="O meni" title='Ko Sam Ja?'/>
      <AboutUs/>
      <Divider subtitle='Uspesno su to Uradili' title='Sta Nasi Klijent i Kazu o Nama.'/>
      <Testimonials/>
      <Footer/>
    </div>
  )
};

export default App
