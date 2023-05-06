import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

function IsLoading() {
    const loadingPro = useSelector((state)=>state.product.isLoading)
    const loadingCat = useSelector((state)=>state.category.isLoading)
  return (
    <Fragment>
    {(loadingPro || loadingCat) &&
        <div>IsLoading .... </div>
    }
    </Fragment>
    
  )
}

export default IsLoading