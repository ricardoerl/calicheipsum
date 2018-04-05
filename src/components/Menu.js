import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Box } from 'rebass';

const Menu = () => (
  <Flex>
    <Box mr={2}>
      <NavLink to="/">Home</NavLink>
    </Box>
    <Box mr={2}>
      <NavLink to="/submit">Submit</NavLink>
    </Box>
    <Box mr={2}>
      <NavLink to="/list">List</NavLink>
    </Box>
  </Flex>
);

export default Menu;
