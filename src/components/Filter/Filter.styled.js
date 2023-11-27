import styled from 'styled-components';

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
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

export const Input = styled.input`
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
