import React from 'react';

const UserInfo = (props) => {

  return (
    <div className="user-info">
      <img className="img-responsive center-block" src={props.info.owner.avatar_url} />
      <h3>User Name: {props.info.owner.login}</h3>
      <h4>GitHub: <a href={props.info.owner.html_url} target="_blank">{props.info.owner.html_url}</a></h4>
    </div>
  );
};


export default UserInfo;
