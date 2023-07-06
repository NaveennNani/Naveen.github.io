import React from 'react'
import Card from './Card'

function HomePage(props) {// props contain data==> setStage
  return (
    <div>
        <div className='cards'>
            <div>
                <Card info={props.data}/> {/* setStage */}
            </div>
        </div>
    </div>
  )
}

export default HomePage
