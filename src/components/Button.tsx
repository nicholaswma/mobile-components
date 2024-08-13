import React from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import type { DefaultTheme } from 'styled-components/native';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  alternate?: boolean;
  styled?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  fullWidth,
  disabled,
  alternate,
  styled: customStyle,
}) => {
  const theme = useTheme();
  return (
    <StyledButton
      onPress={disabled ? undefined : onPress}
      theme={theme}
      fullWidth={fullWidth}
      disabled={disabled}
      alternate={alternate}
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
  alternate: boolean;
}

const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${(props: any) =>
    props.alternate
      ? 'transparent'
      : props.disabled
        ? '#544A81'
        : props.theme.colors.primary};
  border-width: ${(props: { alternate: any }) =>
    props.alternate ? '1.5px' : '0'};
  border-color: ${(props: { disabled: any }) =>
    props.disabled ? '#544A81' : '#8e7bea'};
  padding: 10px 20px;
  border-radius: 10px;
  font-family: 'ManropeRegular';
  align-items: center;
  justify-content: center;
  align-self: ${(props: { fullWidth: boolean }) =>
    props.fullWidth ? 'stretch' : 'flex-start'};
`;

const ButtonText = styled.Text<{ disabled: boolean }>`
  color: ${(props: any) => (props.disabled ? '#A9A4C0' : '#ffffff')};
  text-align: center;
  font-family: ManropeSemiBold;
  text-align: center;
  font-size: 16px;
`;

export default Button;
