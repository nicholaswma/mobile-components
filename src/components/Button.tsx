import React from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import type { DefaultTheme } from 'styled-components/native';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  styled?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  fullWidth = false,
  disabled = true,
  styled: customStyle,
}) => {
  const theme = useTheme();
  return (
    <StyledButton
      onPress={disabled ? undefined : onPress}
      theme={theme}
      fullWidth={fullWidth}
      disabled={disabled}
      style={customStyle?.container}
    >
      <ButtonText style={customStyle?.text} disabled={disabled}>
        {children}
      </ButtonText>
    </StyledButton>
  );
};

interface StyledButtonProps {
  theme: DefaultTheme;
  fullWidth: boolean;
  disabled: boolean;
}

const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: #8e7bea;
  padding: 10px 20px;
  border-radius: 10px;
  font-family: 'ManropeRegular';
  align-items: center;
  justify-content: center;
  align-self: ${(props: any) => (props.fullWidth ? 'stretch' : 'flex-start')};
`;

const ButtonText = styled.Text<{ disabled: boolean }>`
  color: ${(props: any) => props.theme.colors.text};
  text-align: center;
`;

export default Button;
