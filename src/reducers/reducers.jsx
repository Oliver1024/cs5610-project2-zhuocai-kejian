import { combineReducers } from 'redux'
import panelReducer from 'reducers/panelReducer'
import gameReducer from 'reducers/gameReducer'
import winReducer from 'reducers/winReducer'
import dragReducer from 'reducers/dragReducer'
import dragItemReducer from 'reducers/dragItemReducer'
export default combineReducers({
    click: panelReducer,
    game: gameReducer,
    drag: dragReducer,
    winClick: winReducer,
    dragItem: dragItemReducer
})