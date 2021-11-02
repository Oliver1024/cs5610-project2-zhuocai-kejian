/**
 * Unselected - show a color for a state when the 
 * space has not ever been selected

Selected, hit a ship - 
show a color and icon to show that a boat was hit here

Selected, hit nothing - 
show a color and icon to show that someone selected this spot but nothing was hit

Hover - show a variation of the above states of the user is hovering over a tile

 */

const defaultState = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
];


export default function gameReducer(
    state = defaultState, action
) {
    if (action.type === 'click') {
        const value = state[action.x][action.y];
        if (value === '0') {
            state[action.x][action.y] = '1';

        } else if (value === 'U') {
            state[action.x][action.y] = 'X';
        } else if (value === '1') {
            state[action.x][action.y] = '1';
        } else if (value === 'X') {
            state[action.x][action.y] = 'X';
        }
        else {
            state[action.x][action.y] = '0'
        }
        return [...state];
    }
    return state;
}