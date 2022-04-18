import { Button, TextField } from '@mui/material'
import { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeCheckBox,
    changeVisible,
    updateName,
} from '../store/profile/actions'

const Profile = () => {
    const { showName, name, agree, textPull, textPush } = useSelector(
        (state) => state.profile
    )

    const inputRef = useRef()

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            saveName()
            setValue('')
        }
    }

    const checkBoxChange = useCallback(() => {
        dispatch(changeCheckBox)
    }, [dispatch])

    const setShowName = useCallback(() => {
        dispatch(changeVisible)
    }, [dispatch])

    const handleChanger = (e) => {
        setValue(e.target.value)
    }

    const saveName = () => {
        dispatch(updateName(value))
        setValue('')
    }

    return (
        <>
            <div>Profile</div>

            <p>{agree ? textPush : textPull}</p>
            <input
                type="checkbox"
                name="agree"
                checked={agree}
                onChange={checkBoxChange}
            />
            <blockquote>{showName && <h3>Ваше имя: {name}</h3>}</blockquote>
            <button onClick={setShowName}>Show name</button>
            <TextField
                inputRef={inputRef}
                value={value}
                placeholder={'Введите имя'}
                autoFocus={true}
                onChange={handleChanger}
                onKeyPress={handleKeyPress}
            />
            <Button onClick={saveName}>Сохранить</Button>
        </>
    )
}

export default Profile
