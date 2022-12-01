'use client'

import { useState, useRef } from 'react'
import Header from './header'
import Preview from './preview'
import { getParagraph } from '../lib/utils'

const Main = (props) => {

    const [count, setCount] = useState(1)
    const [texts, setTexts] = useState([props.data[0]])
    
    const handleGenerate = () => {

        if(!(isNaN(count) || count.length === 0 || parseInt(count) === 0)) {

            const items = getParagraph(props.data, parseInt(count))

            setTexts(items)

        }

    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(texts.join("\r\n\r\n"))
        } catch(err) {
            console.log(err)
            tryAgain()
        }
    }

    const tryAgain = () => {
        try {
            var tf = document.createElement('textarea')
            tf.setAttribute('style', 'white-space: pre;')
            tf.innerText = texts.join("\r\n\r\n")
            document.body.appendChild(tf)
            tf.select()
            document.execCommand('copy')
            tf.remove()
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="container">
                <Header />
                <main className="main">
                    <div className="control">
                        <div className="panel">
                            <div className="controlPanel">
                                <label className="label">Paragraphs</label>
                                <input maxLength={2} className="count" type="text" value={count} onChange={(e) => setCount(e.target.value)} />
                                <button className="button" onClick={handleGenerate}>Generate</button>
                            </div>
                            <button className="button" onClick={handleCopy}>Copy Text</button>
                        </div>
                    </div>
                    <Preview data={texts} />
                </main>
            </div>
        </>
    )
}

export default Main