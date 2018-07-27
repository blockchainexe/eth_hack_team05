import React, { Component } from 'react'
import {Input, Icon} from 'react-materialize'
import Modal from 'react-responsive-modal';
import SimpleButton from "../components/SimpleButton";

class DestinationCard extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  };

  onCloseModal() {
    this.setState({ open: false });
  };

  sliceDescription(description) {
    if(description){
      return `${description.substr(0, 10)}...`
    }else{
      return ''
    }
  }

  render() {
    const { open } = this.state;

    return (
      <div className="destination-card col s12 m6 l3">
        <div className="card">
          <div className="card-image">
            <img src={this.props.destination.image}></img>
            <span className="card-title">{this.props.destination.name}</span>
            <a onClick={this.onOpenModal} className="btn-floating halfway-fab waves-effect waves-light scale-transition"><Icon>search</Icon></a>
          </div>
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2 className="modal-title">Send Request</h2>
            <p>{this.props.destination.description}</p>
            <label>Request description</label>
            <Input type='textarea' />
            <div className="right-align">
              <SimpleButton label="Send request"></SimpleButton>
            </div>
          </Modal>
          <div className="card-content">
            <p>{this.sliceDescription(this.props.destination.description)}</p>
          </div>
          <div className="card-action">
            <div className="ginpay">{this.props.destination.point}<span>ginpay</span></div>
          </div>
        </div>
      </div>
    );
  }
}
export default DestinationCard