import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading } from 'rebass';
import { Row, Col, Button } from 'antd';

const Navigation = () => (
  <Row type="flex" align="middle">
    <Col xs={24} sm={24} md={8}>
      <Heading>
        <Link to="/" style={{ textDecoration: 'none' }}>
          CalicheIpsum
        </Link>
      </Heading>
    </Col>
    <Col xs={24} sm={17} md={6}>
      <Box my={[3, 0]}>
        <Link to="acerca-de" style={{ color: '#ccc', textDecoration: 'none' }}>
          ¿Qué es esto?
        </Link>
      </Box>
    </Col>
    <Col xs={24} sm={7} md={{ span: 5, offset: 5 }}>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://airtable.com/shrzNXPnVFJCWCD2Y"
      >
        <Button icon="plus" className="cta" type="primary">
          Agregar caliche
        </Button>
      </Link>
    </Col>
  </Row>
);

export default Navigation;
