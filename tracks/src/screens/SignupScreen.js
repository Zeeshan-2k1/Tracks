import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context as AuthContext } from '../context/authContext';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage, localSignin } = useContext(
    AuthContext
  );

  useEffect(() => {
    localSignin();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        header="Sign Up for Track"
        button="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink text="Already have an Account? Sign In." routeName="Signin" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
    justifyContent: 'center',
  },
});
export default SignupScreen;
