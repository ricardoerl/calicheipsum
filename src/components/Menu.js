import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Box } from 'rebass';

const Menu = () => (
  <Flex>
    <Box mr={2}>
      <NavLink to="/">Inicio</NavLink>
    </Box>
    <Box mr={2}>
      <NavLink to="/sugerencias">Sugerí un caliche</NavLink>
    </Box>
  </Flex>
);

export default Menu;
