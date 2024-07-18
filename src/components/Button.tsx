// src/components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  fullWidth,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, fullWidth && styles.fullWidth, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8E7BEA',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Button;
