import '../_mockLocation';
import React, { useCallback, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import Map from '../components/Map';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';

const TrackCreate = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaProvider>
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Spacer>
          <Text style={styles.header}>TrackCreate</Text>
          <Map />
          {err ? (
            <Text style={styles.warning}>Please allow location permission</Text>
          ) : null}
        </Spacer>
        <TrackForm />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
  warning: {
    textAlign: 'center',
    color: 'red',
    fontSize: 12,
  },
});

export default withNavigationFocus(TrackCreate);
