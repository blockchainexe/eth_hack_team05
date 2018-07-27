import React, { Component } from 'react'
import Chat from "../components/Chat";
import SimpleButton from "../components/SimpleButton";
import {Input, Icon, Row} from 'react-materialize'
import axios from 'axios';
// import {ginpay} from '../../util/ginpay'

class Chats extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="chats">
        <div className="chat-box">
          <Chat isMyMessage={false} message="I will introduce some tourist spots according to your wishes!"></Chat>
          <Chat isMyMessage={true} message="Thank you! I will try it as a reference!"></Chat>
          <Chat isMyMessage={false} message="Goryokaku of Hokkaido is a nice place!"></Chat>
          <Chat isMyMessage={true} message="Thank you I'm going to Goryokaku!"></Chat>
          <Chat isMyMessage={false} message="Have fun!"></Chat>
          <Chat isMyMessage={true} message="Thank you!"></Chat>
        </div>
        <div className="chat-form row">
          <div className="col s12 m12 l12">
            <textarea className="materialize-textarea"></textarea>
          </div>
        </div>
        <div className="row right-align">
          <SimpleButton label="Send message"></SimpleButton>
        </div>
        <div className="row right-align">
          <SimpleButton label="Reward"></SimpleButton>
        </div>
      </div>
    );
  }
}
export default Chats