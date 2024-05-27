import React from 'react'
import { Button } from 'react-bootstrap'

function Buttonnn({btnn}) {
    return (
        <>
        <div className="col">
           <Button variant='danger'>
                {btnn}
           </Button>
        </div>
           
        </>
    )
}

export default Buttonnn
