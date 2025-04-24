import React, { useState } from 'react';
import AddUserInfo from './AddUserInfor';
import DisplayInfo from './DisplayInfo';


const MyComponent = (props) => {

    const [listUsers, setListUser] = useState([
        { id: 1, name: 'Alo', age: '30' },
        { id: 2, name: 'Hello', age: '20' },
        { id: 3, name: 'Hi', age: '10' }]
    );

    const handleAddNewUser = (user) => {
        setListUser(
            [user, ...listUsers]
        )
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers]
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUser(listUsersClone)
    }

    return (
        <>
            <div className='a'>

                <AddUserInfo handleAddNewUser={handleAddNewUser} /> <br />
                <DisplayInfo listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>

            <div className='b'>

            </div>

        </>

    )
}

export default MyComponent;