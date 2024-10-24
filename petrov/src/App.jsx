import './App.css';
import Welcome from './assets/components/Welcome';
import Conocenos from './assets/components/Conocenos';
import Servicios from './assets/components/Servicios';
import Cursos from './assets/components/Cursos';
import PromoApp from './assets/components/PromoApp';
// import Contacto from './assets/components/Contacto'
import NavBarDesktop from './assets/components/NavBar.jsx';

function App() {
  return (
    <>
      <NavBarDesktop />
      
      {/* Sección de Welcome */}
      <section id="inicio">
        <Welcome />
      </section>

      {/* Sección de Conócenos */}
      <section id="sobre-nosotros">
        <Conocenos />
      </section>

      {/* Sección de Servicios */}
      <section id="servicios">
        <Servicios />
      </section>

      {/* Sección de Cursos */}
      <section id="cursos">
        <Cursos />
      </section>

      {/* Sección de Promoción de la App */}
      <section id="promo-app">
        <PromoApp />
      </section>

      {/* Si tienes un componente de contacto en el futuro */}
      {/* <section id="contacto">
        <Contacto />
      </section> */}
    </>
  );
}

export default App;
