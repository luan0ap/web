import { playerItemsActions } from 'actions';
import createReducer from 'reducers/reducerFactory';

const initialState = {
  loading: true,
  error: false,
  loaded: false,
  list: [],
};

export default createReducer(initialState, playerItemsActions);

export const getPlayerItems = {
  getPlayerItemsById: (state, id) => state.app.gotPlayer.items.byId[id] || { ...initialState },
  getError: (state, id) => getPlayerItems.getPlayerItemsById(state, id).error,
  getLoading: (state, id) => getPlayerItems.getPlayerItemsById(state, id).loading,
  isLoaded: (state, id) => getPlayerItems.getPlayerItemsById(state, id).loaded,
  getItemsList: (state, id) => getPlayerItems.getPlayerItemsById(state, id).list,
};
