import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Banner from './Banner';
import Footer from './Footer';
import NavbarComponent from './Navbar';

const StyledContainer = styled.div`
  flex: 1 0 auto;
`;

const StyledFooter = styled.footer`
  flex-shrink: 0;
`;

const Home = () => {
  return (
    <>
      <StyledContainer>
        <NavbarComponent />
        <Container fluid>
          <Row>
            <Col>
              <Banner />
            </Col>
          </Row>
        </Container>
      </StyledContainer>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
};

export default Home;
