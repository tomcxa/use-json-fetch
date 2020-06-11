import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'
import Loader from './Loader'

const Test = ({url, opts}) => {
    const [data, loading, error] = useJsonFetch(url, opts)
    return (
        <div>
            {loading ? <Loader /> : <div>{error ? `${error}` : data.status}</div>}
        </div>
    )
}

export default Test
