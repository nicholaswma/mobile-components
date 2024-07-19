import React, { type ReactNode } from 'react';
import { TextInput, View, type TextInputProps } from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  isPassword?: boolean;
  icon?: ReactNode;
}

const Input: React.FC<InputProps> = ({
  icon,
  isPassword = false,
  ...props
}) => {
  return (
    <InputContainer>
      <StyledInput secureTextEntry={isPassword} {...props} />
      {icon && <IconContainer>{icon}</IconContainer>}
    </InputContainer>
  );
};

const InputContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${(props: any) => props.theme.colors.inputField};
  border-radius: 10px;
  padding-horizontal: 15px;
`;

const IconContainer = styled(View)`
  margin-left: 10px;
`;

const StyledInput = styled(TextInput)`
  flex: 1;
  padding-vertical: 10px;
  font-size: 16px;
  font-family: 'ManropeRegular';
`;

export default Input;
