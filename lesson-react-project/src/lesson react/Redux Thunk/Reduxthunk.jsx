import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getAllProfilesRedux, getPostNameReducer } from './store/reducer/profile/profileThunks';

const Reduxthunk = () => {
    const {profiles} = useSelector((state) => state.profile);
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getAllProfilesRedux())
    }, [])

    const handleName = () => {
        dispatch(getPostNameReducer("Salam"))
    }
    console.log(profiles);
    return (
    <div>
        {profiles.map(({id, name}) => {
            return <h1 key={id}>{name}</h1>
        })}
        <button onClick={handleName}>Add New User</button>
    </div>
  )
}

export default Reduxthunk