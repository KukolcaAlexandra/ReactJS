// @flow

import styled from 'styled-components';

const Button = styled.button`
  color: white;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.4s;

  ${props => props.size === 'big' && `
    background-color:#ffcccc;
    width: 150px;
    height: 30px;
    margin-left: auto;
  `}

  ${props => props.size === 'medium' && `
    background-color: lightgray;
    width: 120px;
    height: 25px;
  `}

  ${props => props.size === 'small' && `
    background-color: grey;
    width: 80px;
    height: 20px;
  `}

  ${props => props.size === 'loadMore' && `
    background-color: lightgray;
    width: 80%;
    height: 30px;
    margin: auto auto 10px auto;
  `}

  &:hover {
    box-shadow: 10px;
    background-color: #ffb3b3;
  }

  &:focus {
    outline: 0;
  }

  ${props => props.pressed && `
    background-color: #ffb3b3;
  `}
`;

export default Button;
