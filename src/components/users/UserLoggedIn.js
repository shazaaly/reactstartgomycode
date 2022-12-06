import React from 'react'
import { UseUser } from '../../contexts/UserContext'

export const UserLoggedIn = () => {
  const {user} =   UseUser()
  return (
    <div>
    hello
    <p>Hello {user.name}</p>
    <p>Subscription email : {user.email}</p>


    </div>
  )
}
