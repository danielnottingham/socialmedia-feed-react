import React from "react";
import './Post.css'
import { Card, Image } from 'react-bootstrap';
import { BsFillHandThumbsUpFill, BsFillChatRightTextFill, BsFillChatDotsFill } from "react-icons/bs";

export default props => {
  return (
    <div>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <Card style={{ width: '285', height: '285' }} id="card">
            <Card.Body>
              <Card.Title>
                <Image src={props.user.avatar} roundedCircle id="user-avatar" />
                {props.user.name}
              </Card.Title>
              <Card.Text id="content">
                {props.content}
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={props.content_image} />
            <div id="social">
              <BsFillHandThumbsUpFill fill="blue" style={{cursor: "pointer"}} />{props.likes}
              <BsFillChatDotsFill fill="blue" style={{cursor: "pointer", marginLeft: "10"}} />{props.total_comments}
              <BsFillChatRightTextFill fill="blue" style={{cursor: "pointer", marginLeft: "10"}} />{props.shares}
            </div>
          </Card>
        </li>
      </ul>
    </div>
  )
}