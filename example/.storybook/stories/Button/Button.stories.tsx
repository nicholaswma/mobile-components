import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import Button from '../../../../src/components/Button';
import { ThemeProvider } from '../../../../src/theme/ThemeContext';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Test Button',
    theme: 'light',
    fullWidth: false,
  },
};

export default ButtonMeta;

interface ButtonWithThemeProps {
  children: React.ReactNode;
  onPress: () => void;
  theme: 'light' | 'dark';
  fullWidth: boolean;
}

const ButtonWithTheme: React.FC<ButtonWithThemeProps> = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <Button onPress={props.onPress} fullWidth={props.fullWidth}>
        {props.children}
      </Button>
    </ThemeProvider>
  );
};

export const Basic: StoryObj<typeof ButtonWithTheme> = {
  render: (args) => (
    <View style={{ padding: 20, width: '100%' }}>
      <ButtonWithTheme {...args} />
    </View>
  ),
};
