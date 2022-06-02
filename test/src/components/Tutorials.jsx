import React from 'react'

const Tutorials = (props) => {

    setTimeout(() => {
        props.history.push('/')
    }, 5000)
  return (
      
    <div className='container mt-3'>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> Miaou
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <h1>Tutorial: Intro to React</h1>
    </div>
  )
}

export default Tutorials