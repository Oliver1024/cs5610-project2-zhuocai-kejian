export default function dragItemReducer(
    state = "0", action
) {
    console.log(action.symbol)
    if (action.type === 'dragStart') {
        state = action.symbol;
        console.log(action.symbol)
        return state;
    } else if
        (action.type === 'dragStart2') {
        state = action.symbol;
        return state;
    }
    return state;
}