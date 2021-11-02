export default function winReducer(
    state = 0, action
) {
    if (action.type === 'click') {
        if (action.symbol === 'U') {
            state += 1

        }
    }
    return state;
}