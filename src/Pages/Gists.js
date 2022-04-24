import { Button, CircularProgress } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { API_URL_PUBLIC } from '../constants/gists'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectGists,
    selectGistsError,
    selectGistsLoading,
} from '../store/gists/selectors'
import { getAllGists, getGistsRequest } from '../store/gists/action'

const Gists = () => {
    const dispatch = useDispatch()
    const gists = useSelector(selectGists)
    const loading = useSelector(selectGistsLoading)
    const error = useSelector(selectGistsError)

    const requestGists = useCallback(async () => {
        dispatch(getAllGists())
    }, [])
    //     // fetch(API_URL_PUBLIC)
    //     //     .then((response) => {
    //     //         if (!response.ok) {
    //     //             throw new Error(`Failed with status ${response.status}`)
    //     //         }
    //     //         return response.json()
    //     //     })
    //     //     .then((result) => setGists(result))
    //     //     .catch((err) => {
    //     //         setError(true)
    //     //         console.log(err)
    //     //     })
    //     //     .finally(() => setIsLoading(true))
    // }

    useEffect(() => {
        requestGists()
    }, [])

    const renderGists = useCallback(
        (gist) => (
            <li key={gist.id}>{gist.description || 'no description'} </li>
        ),
        []
    )

    if (loading) {
        return <CircularProgress />
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <Button onClick={requestGists}>Try again</Button>
            </>
        )
    }

    return <ul style={{ listStyleType: 'none' }}>{gists.map(renderGists)}</ul>
}

export default Gists
