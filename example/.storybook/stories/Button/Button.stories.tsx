import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import Button from '../../../../src/components/Button';
import { useTheme } from '../../../../src/theme/ThemeContext';

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
    title: 'Test Button',
    theme: 'light',
    fullWidth: false,
  },
};

export default ButtonMeta;

interface ButtonWithThemeToggleProps {
  title: string;
  onPress: () => void;
  theme: 'light' | 'dark';
  fullWidth: boolean;
}

const ButtonWithThemeToggle: React.FC<ButtonWithThemeToggleProps> = (props) => {
  const { toggleTheme, themeType } = useTheme();
  React.useEffect(() => {
    if (props.theme !== themeType) {
      toggleTheme();
    }
  }, [props.theme, themeType, toggleTheme]);

  return (
    <Button onPress={props.onPress} fullWidth={props.fullWidth}>
      {props.title}
    </Button>
  );
};

export const Basic: StoryObj<typeof ButtonWithThemeToggle> = {
  render: (args) => (
    <View style={{ padding: 20, width: '100%' }}>
      <ButtonWithThemeToggle {...args} />
    </View>
  ),
};
