import React from 'react'

export const HocBlueprint = () => {
  return (
    <div>HocBlueprint to be wrapped</div>
  )
}

const EnhancedComponent = (HocBlueprint)=>{
    const data = {id : 1, name:'Java', start : '15 Jan 2020'}

    return (originalProps)=>{
        return <HocBlueprint {...data} {...originalProps} />
    }
}
