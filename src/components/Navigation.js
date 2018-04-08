import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading } from 'rebass';
import { Row, Col, Button } from 'antd';

const Navigation = () => (
  <Row type="flex" align="middle">
    <Col xs={24} sm={6}>
      <Heading>
        <Link to="/" style={{ textDecoration: 'none' }}>
          CalicheIpsum
        </Link>
      </Heading>
    </Col>
    <Col xs={24} sm={6}>
      <Box mx={3}>
        <Link to="acerca-de" style={{ color: '#ccc', textDecoration: 'none' }}>
          ¿Qué es esto?
        </Link>
      </Box>
    </Col>
    <Col xs={24} sm={{ span: 5, offset: 7 }}>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://airtable.com/shrzNXPnVFJCWCD2Y"
      >
        <Button icon="plus" className="cta" type="primary" size="large">
          Agregar caliche
        </Button>
      </Link>
    </Col>
  </Row>
);

export default Navigation;
