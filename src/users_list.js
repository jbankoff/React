import React, { Component } from 'react';

class UserList extends Component {
  render(){
 //   console.log('props', this.props.usersList.map((user)=>{return user.name}));
    return (
    <ol className='userList'>
      { this.props.usersList.Map((user)=>(
      
      <li>hello {user.name}</li>
    ))}
    </ol>
  
)
}
}
export default UserList