import { combineReducers } from 'redux'
import panelReducer from 'reducers/panelReducer'
import gameReducer from 'reducers/gameReducer'
import winReducer from 'reducers/winReducer'
export default combineReducers({
    click: panelReducer,
    game: gameReducer,
    winClick: winReducer
})