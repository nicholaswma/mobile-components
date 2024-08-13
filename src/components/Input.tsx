import React, { type ReactNode } from 'react';
import {
  TextInput,
  View,
  type ViewStyle,
  type TextStyle,
  type TextInputProps,
  Text,
} from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  isPassword?: boolean;
  icon?: ReactNode;
  containerStyle?: ViewStyle;
  error?: boolean;
  errorMessage?: string;
  inputStyle?: TextStyle;
}

const Input: React.FC<InputProps> = ({
  icon,
  isPassword = false,
  containerStyle,
  error = false,
  errorMessage,
  inputStyle,
  ...props
}) => {
  return (
    <View style={{ gap: 2 }}>
      <InputContainer style={containerStyle} error={error}>
        <StyledInput
          secureTextEntry={isPassword}
          style={inputStyle}
          {...props}
        />
        {icon && <IconContainer>{icon}</IconContainer>}
      </InputContainer>
      {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </View>
  );
};

const InputContainer = styled(View)<{ error?: boolean }>`
  flex-direction: row;
  align-items: center;
  border-width: 1.5px;
  border-color: ${(props) =>
    props.error ? props.theme.colors.fail : props.theme.colors.inputField};
  border-radius: 10px;
  padding-horizontal: 15px;
`;

const IconContainer = styled(View)`
  margin-left: 10px;
`;

const ErrorMessage = styled(Text)`
  color: ${(props) => props.theme.colors.fail};
  font-family: 'ManropeSemiBold';
`;

const StyledInput = styled(TextInput)`
  flex: 1;
  padding-vertical: 10px;
  font-size: 16px;
  font-family: 'ManropeRegular';
  color: ${(props: any) => props.theme.colors.text};
`;

export default Input;
