import styled from 'styled-components'

const ConocenosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  background-image: url(../src/assets/images/bg3.jpeg);
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  text-align: center;
  gap: 5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 23, 87, 0.76);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`

const Title = styled.p`
  font-size: 4rem;
  font-weight: 400;
  color: #FFFFFF;

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
  color: #DDDDDD;
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

const Valores = styled.div`
  font-size: 1.5rem;
  color: #DDDDDD;
  text-align: center;
  max-width: 20rem;
  line-height: 1.3;
  margin: 1rem 0 1rem 0 ;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 1.25rem; /* Pantallas medianas (tablets) */
    max-width: 30%; /* Ajustar el ancho en pantallas medianas */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Pantallas pequeñas (móviles) */
    max-width: 90%; /* Ajustar el ancho en pantallas pequeñas */
  }
`

const ImageV = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 3rem;
  margin-bottom: 2rem;
`
const ValoresContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;

@media (max-width: 480px) {
   display: flex;
   flex-direction: column;
   align-items: center;
  }
`

const ValoresTextos = styled.p`
text-align: center;
`


const Conocenos = () => {
    return (
        <ConocenosContainer>
            <Title>¿Ya conoces nuestros cursos?</Title>
            <Copy>En nuestra empresa, ofrecemos cursos especializados en prevención de incendios diseñados para proteger vidas y bienes. Aprenderás a identificar riesgos, utilizar extintores y tomar medidas preventivas clave para evitar emergencias. Nuestros entrenadores certificados te brindarán herramientas prácticas para responder de manera rápida y segura en caso de incendio.</Copy>
        <div>
            <div></div>
            <p></p>
        </div>
        </ConocenosContainer>
    )
}

export default Conocenos
