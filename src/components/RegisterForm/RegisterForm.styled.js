import { Field } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 600px;
  color: white;
  padding: 20px;
  gap: 15px;
  box-shadow: 4px 4px 23px 12px rgba(0, 7, 236, 0.35);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
  &:first-child {
    margin-right: 50px;
  }

  &:hover {
    color: #76c70f;
  }
`;

export const Input = styled(Field)`
  padding: 8px 12px;
  font-size: 20px;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  background-color: transparent;
  color: white;
  width: 300px;
  &:hover,
  &:focus {
    box-shadow: 4px 4px 23px 12px rgba(0, 7, 236, 0.35);
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;

  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledBtn = styled.button`
  padding: 10px;
  min-width: 100px;
  min-height: 40px;
  border: 1px solid black;
  border-radius: 8px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: blue;
  }
  &:hover,
  &:focus {
    box-shadow: 4px 4px 23px 12px rgba(0, 7, 236, 0.35);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
