import axios from 'axios'

export const SMURFS_LOADING = 'SMURFS_LOADING'
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS'
export const SMURFS_ERROR = 'SMURFS_ERROR'


export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: SMURFS_LOADING })

        axios
            .get(
                'http://localhost:3333/smurfs'
            )
            .then(res => {
                // console.log('API call: ', res.data)
                dispatch({ type: SMURFS_SUCCESS, payload: res.data })                 
            })
            .catch(err => {
                // console.log('API error: ', err)
                dispatch({ type: SMURFS_ERROR, payload: err.message })
            })
    }
}

export const addNewSmurf = ({ name, age, height }) => {
    return (dispatch) => {
        dispatch({ type: SMURFS_LOADING })

        axios
            .post(
                'http://localhost:3333/smurfs', { name, age, height }
            )
            .then( res => {
                // console.log('Post request return: ', res.data)
                dispatch({ type: SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                // console.log(err)
                dispatch({ type: SMURFS_ERROR, payload: err.message })
            })
    }
}