import styled from 'styled-components';

// Estilos para el contenedor de la barra de navegación
const Footer = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: top;
  padding: 3rem 0rem 3rem 0rem;
  background-color: #3C0000;
`
const FooterContainer = styled.nav`
color: #FFFFFF;
`
const FooterLink = styled.nav`
color: #FFFFFF;
`
const FooterTitle = styled.nav`
font-size: 1.3rem;
margin-bottom: .5rem;
font-weight: 500;
`
const Disclaimer = styled.nav`
font-size: 1.2rem;
background-color: #3c0000;
color: #FFFFFF;
text-align: center;
padding: 1rem 0rem 1rem 0rem;
`

const Navbar = () => {
    // Función para hacer scroll suave a una sección
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Footer>
                <FooterContainer>
                    <FooterTitle>Mapa de sitio</FooterTitle>
                    <FooterLink onClick={() => scrollToSection('sobre-nosotros')}>Conocenos</FooterLink>
                    <FooterLink onClick={() => scrollToSection('servicios')}>Servicios</FooterLink>
                    <FooterLink onClick={() => scrollToSection('cursos')}>Cursos</FooterLink>
                    <FooterLink onClick={() => scrollToSection('promo-app')}>Nuestra App</FooterLink>
                    <FooterLink onClick={() => scrollToSection('contacto')}>Contacto</FooterLink>
                </FooterContainer>
                <FooterContainer>
                    <FooterTitle>Contactanos</FooterTitle>
                    <FooterLink >Telefono</FooterLink>
                    <FooterLink >Correo</FooterLink>
                    <FooterLink >Facebook</FooterLink>
                    <FooterLink >LinkedIn</FooterLink>
                </FooterContainer>
            </Footer>
            <Disclaimer>Desarrollado por: Danika - 2024</Disclaimer>
        </>
    );
};

export default Navbar;
