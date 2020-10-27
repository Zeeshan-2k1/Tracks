import * as Location from 'expo-location';

const tenMetresWithDegree = 0.0001;

const getLocation = (increament) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 85.35217 + increament * tenMetresWithDegree,
      latitude: 23.36493 + increament * tenMetresWithDegree,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
