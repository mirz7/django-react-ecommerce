import React from 'react'
import {Alert} from 'react-bootstrap'

function Message({ variant, children}) {
  return (
<<<<<<< HEAD
      <Alert variant={ variant} className="shadow-sm rounded border-0">
=======
      <Alert variant={ variant}>
>>>>>>> cf8767a (added new features & refactored code)
          {children}
     </Alert>
  )
}

export default Message