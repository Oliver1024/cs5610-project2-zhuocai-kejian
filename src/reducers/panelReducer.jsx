
const defaultState = {
    className: "panel-wrapper panel-invisible",
    active: "false"
}

export default function panelReducer(
    state = defaultState, action
) {
    if (action.type === 'panel-click') {
        if (action.active === "true") {
            return {
                className: "panel-wrapper panel-visible",
                active: "false"
            }
        } else if (action.active === "false") {
            return {
                className: "panel-wrapper panel-invisible",
                active: "false"
            }
        }
    }
    return state;
}