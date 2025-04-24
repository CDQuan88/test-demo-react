import React, { useState,useEffect } from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg';

const DisplayInfo = (props) => {

    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect( 
        () => {
        if(listUsers.length === 0){
            alert('Deleted all the user')
        }
        console.log('>>> call me useEffect')
    },[listUsers]
    );

    return (
        <div className='display-info-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser ? "Hide list users" : "Show list users"}
                </span>
            </div>

            {isShowHideListUser &&
                <>

                    {listUsers.map((user) => {
                        return (
                            <div className={+user.age > 18 ? 'green' : 'red'} key={user.id} >
                                <div>My name is: {user.name}</div>
                                <div>My age is: {user.age}</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}

                </ >
            }
        </div>

    )

}

export default DisplayInfo;