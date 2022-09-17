import React from "react"

export const DrawComponent = ({ counter }) => {
    return (
        <div>
            <img src={`/assets/${counter}.jpg`} alt="test" />
        </div>
    )
}