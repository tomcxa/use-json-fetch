import React from 'react'

export default function withFetch(url, opts) {
    return (Component, anchor) => {
        if (typeof url === 'function') {
            url = url(anchor)
        }

        return () => {
            return (
                <Component url={url} opts={opts} />
            )
        }
    }
}