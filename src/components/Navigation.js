import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from 'rebass';
import { Row, Col, Button } from 'antd';

const Navigation = () => (
  <Row type="flex" justify="space-between" align="middle">
    <Col>
      <Heading>
        <Link to="/" style={{ textDecoration: 'none' }}>
          CalicheIpsum
        </Link>
      </Heading>
    </Col>
    <Col>
      <Link target="_blank" to="https://airtable.com/shrzNXPnVFJCWCD2Y">
        <Button icon="plus" className="cta" type="primary" size="large">
          Agregar caliche
        </Button>
      </Link>
    </Col>
  </Row>
);

export default Navigation;
