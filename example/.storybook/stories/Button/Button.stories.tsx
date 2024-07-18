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
  },
  args: {
    title: 'Test Button',
    theme: 'light',
  },
};

export default ButtonMeta;

interface ButtonWithThemeToggleProps {
  title: string;
  onPress: () => void;
  theme: 'light' | 'dark';
}

const ButtonWithThemeToggle: React.FC<ButtonWithThemeToggleProps> = (props) => {
  const { toggleTheme, themeType } = useTheme();

  React.useEffect(() => {
    if (props.theme !== themeType) {
      toggleTheme();
    }
  }, [props.theme, themeType, toggleTheme]);

  return <Button title={props.title} onPress={props.onPress} />;
};

export const Basic: StoryObj<typeof ButtonWithThemeToggle> = {
  render: (args) => (
    <View style={{ padding: 20 }}>
      <ButtonWithThemeToggle {...args} />
    </View>
  ),
};
