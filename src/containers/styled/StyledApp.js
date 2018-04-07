import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  display: block;
  background-color: #f6f9fc;
`;

const StyledContent = styled(Content)`
  max-width: 48em;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
`;

export { StyledLayout, StyledContent };
