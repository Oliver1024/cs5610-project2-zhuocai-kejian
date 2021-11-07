export default function dragItemReducer(
    state = "0", action
) {
    if (action.type === 'dragStart') {
        state = action.symbol;
        return state;
    } else {
        state = "0";
    }
    return state;
}