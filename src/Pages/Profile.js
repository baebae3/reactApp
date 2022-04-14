import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCheckBox, changeVisible } from '../store/profile/actions'

const Profile = () => {
    const { showName, name, agree, textPull, textPush } = useSelector(
        (state) => state
    )
    const dispatch = useDispatch()

    const checkBoxChange = useCallback(() => {
        dispatch(changeCheckBox)
    })

    const setShowName = useCallback(() => {
        dispatch(changeVisible)
    }, [dispatch])

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
            <blockquote>{showName && <h3>{name}</h3>}</blockquote>
            <button onClick={setShowName}>Show name</button>
        </>
    )
}

export default Profile
