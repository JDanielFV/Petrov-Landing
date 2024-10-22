import styled from 'styled-components';

const AppContainer = styled.div`
  width: 17rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
`;

const AppTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
`;

const AppText = styled.div`
  font-size: 1.5rem;
  font-weight: 300; /* Cambié el valor de 250 a 300 */
`;

const AppMockup = styled.img`
  width: 10rem;
  height: auto;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const AppLinkImg = styled.img`
    background-image: url(${props => props.src});
    width: 12rem;
    height: auto;
    border-radius: 1.5rem;
`;

const AppLink = styled.a`
& :hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
    cursor: pointer;
}
  
`;

const AppLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Promo = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const AppPromo = () => {
  return (
    <Promo>
      <AppContainer>
        <AppTitle>Prueba nuestra app</AppTitle>
        <AppText>Disponible en App store y Play store, úsala para programar tus mantenimientos regulares</AppText>
      </AppContainer>
      <AppMockup src="../src/assets/images/ios1.png"></AppMockup>
      <AppLinkContainer>
        <AppLink  href="https://play.google.com/store/apps/details?id=com.geologisticerp&hl=es_MX"><AppLinkImg src="../src/assets/images/Playstore.png"></AppLinkImg></AppLink>
        <AppLink src="../src/assets/images/ios1.png" href="https://apps.apple.com/mx/app/geologistic-erp/id6452047734"><AppLinkImg src="../src/assets/images/Appstore.png"></AppLinkImg></AppLink>
      </AppLinkContainer>
    </Promo>
  );
};

export default AppPromo;
