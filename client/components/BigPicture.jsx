import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function BigPicture (props) {
  // eslint-disable-next-line no-console
  console.log('Logging props in main:', props)

  return (
    <React.Fragment>
      <div className="fullPage"></div>
    </React.Fragment>
  )
}

export default BigPicture