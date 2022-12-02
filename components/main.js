'use client'

import { useState, useRef } from 'react'
import Header from './header'
import Preview from './preview'
import { getParagraph } from '../lib/utils'

const Main = (props) => {

    const [count, setCount] = useState(1)
    const [texts, setTexts] = useState([props.data[0]])
    
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

    const handleGenerate = (e) => {
        e.preventDefault()

        if(!(isNaN(count) || count.length === 0 || parseInt(count) === 0)) {

            const items = getParagraph(props.data, parseInt(count))

            setTexts(items)

        }

    }

    return (
        <>
            <div className="container">
                <Header />
                <main className="main">
                    <div className="control">
                        <div className="panel">
                            <form onSubmit={handleGenerate} noValidate>
                                <div className="controlPanel">
                                    <label className="label">Paragraphs</label>
                                    <input 
                                    className="count" 
                                    type="text" 
                                    maxLength={2} 
                                    value={count} 
                                    onChange={(e) => setCount(e.target.value)}
                                    />
                                    <button className="button" type="submit">Generate</button>
                                </div>
                            </form>
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