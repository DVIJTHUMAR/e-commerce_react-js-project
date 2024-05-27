import React from 'react'

function SecHedingH2({ h2, p, p1, p2 }) {
    return (
        <div className='col'>
            <h2 className='fst-italic' style={{ fontSize: '40px' }}>{h2}</h2>
            <p className='py-2' style={{ fontSize: '15px' }}>
                {p}
            </p>
            <p className='' style={{ fontSize: '15px' }}>
                {p1}
            </p>
            <p className='' style={{ fontSize: '15px' }}>
                {p2}
            </p>
        </div>
    )
}

export default SecHedingH2
