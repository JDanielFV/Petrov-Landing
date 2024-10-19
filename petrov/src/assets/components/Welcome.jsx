import styled from 'styled-components'

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  background-color: #000000;
  padding: 2rem;
  opacity: 65%;
  text-align: center;
  text-overflow: clip;
  gap: 4rem;
`

const Title = styled.p`
  font-size: 4rem;
  font-weight: bold;
  color: #FFFFFF;
`

const Copy = styled.p`
  font-size: 1.5rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
`

const Welcome = () => {
    return (
        <WelcomeContainer >
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