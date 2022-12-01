import React from 'react'

const Preview = ({ data }) => {
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

export default Preview