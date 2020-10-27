import React, { useContext } from 'react';
import { FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as TrackContext } from '../context/TrackContext';

const TrackList = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={{ fontSize: 40 }}>Track List</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <>
              <Spacer>
                <ListItem
                  linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  onPress={() =>
                    navigation.navigate('TrackDetail', { _id: item._id })
                  }
                >
                  <ListItem.Content>
                    <ListItem.Title style={{ color: '#fff' }}>
                      {item.name}
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </Spacer>
            </>
          );
        }}
      />
    </>
  );
};

TrackList.navigationOptions = {
  title: 'Tracks',
};

export default TrackList;
