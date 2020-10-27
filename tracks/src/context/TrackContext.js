import createDataContext from './createDataContext';
import trackerApi from '../apis/tracker';

const TrackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => async (name, locations) => {
  console.log(name, locations);
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  TrackReducer,
  { fetchTracks, createTrack },
  []
);
