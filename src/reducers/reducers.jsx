import { combineReducers } from 'redux'
import panelReducer from 'reducers/panelReducer'
import gameReducer from 'reducers/gameReducer'
import gamePlayerReducer from 'reducers/gamePlayerReducer'
import winReducer from 'reducers/winReducer'
import dragReducer from 'reducers/dragReducer'
import dragItemReducer from 'reducers/dragItemReducer'
export default combineReducers({
    gamePlayer: gamePlayerReducer,
    click: panelReducer,
    game: gameReducer,
    drag: dragReducer,
    winClick: winReducer,
    dragItem: dragItemReducer
})