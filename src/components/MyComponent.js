import React from 'react';
import AddUserInfo from './AddUserInfor';
import DisplayInfo from './DisplayInfo';
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'Alo', age: '30' },
            { id: 2, name: 'Hello', age: '20' },
            { id: 3, name: 'Hi', age: '10' }
        ]
    }

    handleAddNewUser = (user) => {
        this.setState({
            listUsers: [user, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers]
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        this.setState({
            listUsers: listUsersClone
        })

    }

    render() {
        return (
            <>

                <div className='a'>

                    <AddUserInfo handleAddNewUser={this.handleAddNewUser} /> <br />
                    <DisplayInfo listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>

                <div className='b'>

                </div>

            </>

        )
    }
}

export default MyComponent;