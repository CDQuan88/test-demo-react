import React from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg';
class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        const { listUsers } = this.props;
        return (
            <div className='display-info-container'>
                {/* <img src={logo} alt="LogoImage" /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser ? "Hide list users" : "Show list users"}</span>
                </div>
                {this.state.isShowListUser &&
                    <>

                        {listUsers.map((user) => {
                            return (
                                <div className={+user.age > 18 ? 'green' : 'red'} key={user.id} >
                                    <div>My name is: {user.name}</div>
                                    <div>My age is: {user.age}</div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfo;