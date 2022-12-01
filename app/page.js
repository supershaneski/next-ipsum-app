import React from 'react'
import fs from 'fs'
import path from 'path'

import Main from '../components/main'

function Page() {

    const filename = path.join(process.cwd(), 'assets', 'noli.txt')
    
    const txtfile = fs.readFileSync(filename, {encoding: 'utf8', flag: 'r'})

    const paragraphs = txtfile.split(/\n\s*\n/)

    return (
        <Main data={paragraphs} />
    )
}

export default Page