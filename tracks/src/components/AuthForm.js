import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Spacer from './Spacer';

const Authform = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Spacer>
        <Text h2>{props.header}</Text>
      </Spacer>
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        label="Email"
      />
      <Input
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        label="Password"
      />
      {props.errorMessage ? (
        <Text style={styles.errorMessage}>{props.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={props.button}
          onPress={() => props.onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 5,
  },
});

export default Authform;
