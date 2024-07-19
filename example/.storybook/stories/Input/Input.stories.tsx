import React from 'react';
import { View } from 'react-native';
import { Input, useInput } from '../../../../src';
import { Ionicons } from '@expo/vector-icons';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => {
  const { bindings } = useInput('');
  return (
    <View style={{ padding: 20 }}>
      <Input {...bindings} placeholder="Enter text here" />
    </View>
  );
};

export const WithInitialValue = () => {
  const { bindings } = useInput('Initial value');
  return (
    <View style={{ padding: 20 }}>
      <Input {...bindings} placeholder="Enter text here" />
    </View>
  );
};

export const WithSearchIcon = () => {
  const { bindings } = useInput('');
  return (
    <View style={{ padding: 20 }}>
      <Input
        {...bindings}
        placeholder="Search..."
        icon={<Ionicons name="search" size={24} color="gray" />}
      />
    </View>
  );
};

export const WithPasswordToggle = () => {
  const { bindings, setValue } = useInput('');
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <View style={{ padding: 20 }}>
      <Input
        {...bindings}
        onChangeText={(text) => {
          setValue(text);
          bindings.onChangeText(text);
        }}
        placeholder="Enter password"
        isPassword={!showPassword}
        icon={
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
            onPress={togglePasswordVisibility}
          />
        }
      />
    </View>
  );
};

export const WithCustomIcon = () => {
  const { bindings } = useInput('');
  return (
    <View style={{ padding: 20 }}>
      <Input
        {...bindings}
        placeholder="Enter email"
        icon={<Ionicons name="mail" size={24} color="blue" />}
      />
    </View>
  );
};

export const WithErrorStatus = () => {
  const { bindings, setStatus } = useInput('');
  React.useEffect(() => {
    setStatus('error');
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <Input {...bindings} placeholder="Error input" />
    </View>
  );
};

export const WithSuccessStatus = () => {
  const { bindings, setStatus } = useInput('');
  React.useEffect(() => {
    setStatus('success');
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <Input {...bindings} placeholder="Success input" />
    </View>
  );
};
