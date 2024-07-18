import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import type { DefaultTheme } from 'styled-components/native';

const StyledButton = styled.TouchableOpacity<{ theme: DefaultTheme }>`
  background-color: ${(props: any) => props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  const theme = useTheme();
  return (
    <StyledButton onPress={onPress} theme={theme}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};

export default Button;
