import styled from 'styled-components'

const WelcomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  background-image: url(../src/assets/images/background.png);
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem 5rem 2rem;
  text-align: center;
  gap: 5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`

const Title = styled.p`
  font-size: 4rem;
  font-weight: bold;
  color: #FFFFFF;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 3rem; /* Pantallas medianas (tablets) */
  }

  @media (max-width: 480px) {
    font-size: 2.5rem; /* Pantallas pequeñas (móviles) */
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

const Welcome = () => {
    return (
        <WelcomeContainer>
            <Title>Tu tranquilidad,
                <br></br>
                Nuestra prioridad</Title>
            <Copy>En Petrov nos especializamos en la prevención, detección y control de incendios estructurados.

                Nuestra misión es proporcionar soluciones integrales y avanzadas para garantizar la seguridad y protección de vidas y propiedades.
            </Copy>
        </WelcomeContainer>
    )
}

export default Welcome
