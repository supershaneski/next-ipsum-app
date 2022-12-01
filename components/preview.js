import React from 'react'

export default function Preview({ data }) {
    return (
        <div className="preview">
            <div className="inner">
                {
                    data.map((item, i) => {
                        return (
                            <p key={i} className="paragraph">{ item }</p>
                        )
                    })
                }
            </div>
        </div>
    )
}