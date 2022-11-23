import React from 'react'
import { users } from '../../data/usersList'
import '../users/usersList.scss'

export const UsersList = () => {

    const user = users.map(data => {
        // console.log(data);
        const username = `${data.name}`
        const email = `${data.email}`
        const address = `${data.address.street}`
        const company = `${data.company.name}`
        const city = `${data.address.city}`
        return (
            <tr className='row'>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{company}</td>
                <td>{city}</td>
            </tr>
        )

    }

    )

    return (
        <div className='container'>

            <h2 className='heading'> Users Data</h2>

            <div className='users'>
                <table className='users-table'>
                    <thead>
                        <tr style={{ backgroundColor: 'red' }}>
                            <th>Name</th>
                            <th>email</th>
                            <th>address</th>
                            <th>Company Name</th>
                            <th>City</th>

                        </tr>
                    </thead>

                    <tbody>
                        {user}

                    </tbody>

                </table>

            </div>
        </div>
    )
}
