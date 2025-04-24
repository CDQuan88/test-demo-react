import React, { useEffect, useState } from 'react'

const AddUserInfo = (props) => {

    const [userInfo, setUserInfo] = useState(
        {
            name: 'Cao Quan',
            address: 'Vinh Phuc',
            age: 22
        }
);
    const handleOnChangeInput = (event) => {
        setUserInfo({
            ...userInfo,
            name: event.target.value,
        })
}

    const handleOnChangeAge = (event) => {
        setUserInfo({
            ...userInfo,
            age: event.target.value
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: userInfo.name,
            age: userInfo.age
        });
    }



    return (
        <div>
            My name is {userInfo.name} and I'm {userInfo.age}

            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input type="text"
                    value={userInfo.name}
                    onChange={(event) => handleOnChangeInput(event)}
                />

                <label>Your age:</label>
                <input type="text"
                    value={userInfo.age}
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfo;