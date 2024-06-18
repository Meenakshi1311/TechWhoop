/*import React from 'react';
import { Box } from '@mui/material';
import Button from 'react-bootstrap/Button';
import { positions } from '@mui/system';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <Box component="section" sx={{ height:'100px',border:'ridge', paddingLeft:'20px',backgroundColor:'Black',color:'white'}}>
        <Col> This Box renders as an HTML section element.</Col>
        <Col>2 of 3</Col>
        <Col><Button variant="primary" style={positions='Right'}>Primary</Button>{' '}</Col>   
        </Box>
    );
};

export default About;
*/

/*import React from 'react';
import { Box } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { width } from '@mui/system';
import {FaFire} from 'react-icons/fa';

const About = () => {
    return (
        <Box component="section" sx={{ height: '100px', border: 'ridge', paddingLeft: '20px', backgroundColor: 'Black', color: 'white' }}>
            <Row>
                <Col>This Box renders as an HTML section element.</Col>
                <Col></Col>
                <Col style={{ display: 'flex', justifyContent: 'center', marginRight:'5',marginTop:'30px' }}>
                    <Button variant="primary"><FaFire />  Detail</Button>
                </Col>
            </Row>
        </Box>
    );
};

export default About;
*/


import React from 'react';
import { Box } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { FaFire } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import MovingComponent from 'react-moving-text';
import WhatshotIcon from '@mui/icons-material/AccessAlarm';
//import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

import { Margin } from '@mui/icons-material';
import { margin } from '@mui/system';


const About = () => {
    return (
       // <Box component="section" sx={{ height: '100px', border: 'ridge', paddingLeft: '20px', backgroundColor: 'Gray', color: 'white' }}>
            
        <Navbar className="bg-body-tertiary" >
        <Container sx={{backgroundColor: 'Black',height: '100px'}}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="speaker.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} 
          </Navbar.Brand>
          <MovingComponent
  type="fadeOutToTop"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="5"
  fillMode="none">
  React-Moving-Text
</MovingComponent>
          <Row>
                <Col></Col>
                <Col></Col>
                <Col style={{ display: 'flex', justifyContent: 'center', marginRight: '5px', marginTop: '30px' }}>
                    <Button variant="primary">
                    <WhatshotIcon></WhatshotIcon>
                        Detail
                    </Button>
                </Col>
            </Row>
        </Container>
      </Navbar>
      //</Box>
    );
};

export default About;




