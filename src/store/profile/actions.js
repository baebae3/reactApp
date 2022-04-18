export const TOGGLE_NAME = 'PROFILE::TOGGLE_NAME'
export const CHECK_BOX = 'FROFILE::CHECK_BOX'
export const UPDATE_NAME = 'PROFILE::UPDATE_NAME'

export const changeVisible = {
    type: TOGGLE_NAME,
}

export const changeCheckBox = {
    type: CHECK_BOX,
}

export const updateName = (name) => ({
    type: UPDATE_NAME,
    payload: name,
})
