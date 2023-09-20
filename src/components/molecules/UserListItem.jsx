import React from "react";

export default function UserListItem(props) {
  return (
    <a href="#" className="users__list-item">
      <div className="users__list-item-photo">
        <img src={props.user.avatar} className="responsive avatar" alt="" />
      </div>
      <div className="users__list-item-name">
        {props.user.fn} {props.user.ln}
      </div>
    </a>
  );
}
