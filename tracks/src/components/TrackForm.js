import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { recording, locations, name },
    changeName,
    stopRecording,
    startRecording,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          onChangeText={changeName}
          value={name}
          placeholder="Enter Name:"
        />
        <Spacer>
          {recording ? (
            <Button title="Stop" onPress={stopRecording} />
          ) : (
            <Button title="Record" onPress={startRecording} />
          )}
        </Spacer>

        <Spacer>
          {!recording && locations.length ? (
            <Button title="Save Track" onPress={saveTrack} />
          ) : null}
        </Spacer>
      </Spacer>
    </>
  );
};

export default TrackForm;
