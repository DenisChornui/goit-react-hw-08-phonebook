import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  color: white;
  &:first-child {
    margin-right: 50px;
  }

  &:hover {
    color: #76c70f;
  }
  &.active {
    color: #76c70f;
  }
`;
