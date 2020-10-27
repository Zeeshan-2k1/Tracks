import React, { useContext } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaProvider>
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Spacer>
          <Text style={{ fontSize: 30 }}>AccountScreen</Text>
        </Spacer>
        <Spacer>
          <Button onPress={signout} title="Sign Out" />
        </Spacer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

export default AccountScreen;
