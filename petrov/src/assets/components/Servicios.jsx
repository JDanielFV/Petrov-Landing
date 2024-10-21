import styled from 'styled-components'

const ServiciosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  text-align: center;
  gap: 5rem;

  & > * {
    position: relative;
    z-index: 2;
  }
`

const Title = styled.p`
  font-size: 4rem;
  font-weight: 400;
  color: #000;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 3rem; /* Pantallas medianas (tablets) */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Pantallas pequeñas (móviles) */
  }
`

const Copy = styled.p`
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 1.25rem; /* Pantallas medianas (tablets) */
    max-width: 90%; /* Ajustar el ancho en pantallas medianas */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Pantallas pequeñas (móviles) */
    max-width: 95%; /* Ajustar el ancho en pantallas pequeñas */
  }
`
const TitleServicios = styled.p`
  font-size: 4rem;
  font-weight: 400;
  color: #FFF;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 3rem; /* Pantallas medianas (tablets) */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Pantallas pequeñas (móviles) */
  }
`

const CopyServicios = styled.p`
  font-size: 1.5rem;
  color: #FFF;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 1.25rem; /* Pantallas medianas (tablets) */
    max-width: 90%; /* Ajustar el ancho en pantallas medianas */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Pantallas pequeñas (móviles) */
    max-width: 95%; /* Ajustar el ancho en pantallas pequeñas */
  }
`
const ServicioContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  background-image: url(../src/assets/images/evaluacion.jpg);
  background-size: cover;
  background-position: center;
  padding: 10rem 2rem 10rem 2rem ;
  text-align: center;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(101,9,9);
    background: linear-gradient(90deg, rgba(101,9,9,0.7) 0%, rgba(255,255,255,0) 100%);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

`



const Servicios = () => {
    return (
        <>
            <ServiciosContainer>
                <Title>Nuestros Servicios</Title>
                <Copy>Con años de experiencia en el sector, Petrov, Soluciones Contra Incendio, ha construido una sólida reputación por su compromiso con la excelencia y la seguridad. Colaboramos estrechamente con nuestros clientes, entre los que se incluyen empresas destacadas como Herdez, Honeywell, Hielera del Norte, Pisos y Materiales Industriales, y muchos más. Comprendemos sus necesidades específicas y proporcionamos soluciones a medida que superen sus expectativas.</Copy>
            </ServiciosContainer>
            <ServicioContainer>
                <TitleServicios>Evaluacion de riesgos</TitleServicios>
                <CopyServicios>Nuestros expertos analizan detalladamente cada aspecto del entorno, desde la infraestructura hasta los materiales utilizados</CopyServicios>
            </ServicioContainer>
        </>
    )
}

export default Servicios
