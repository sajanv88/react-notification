import React, { Component } from 'react'

import { NotificationStack, Notification} from 'react-notification';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    console.log('App');
  }
  render () {
    return (
      <div>
        <NotificationStack limit="5">
          <Notification key="1" text='Modern React component module'
          type="warning" onCloseHandler={this.close}
          />
          <Notification key="2" text='Modern React component module'
          type="info" onCloseHandler={this.close}
          />
          <Notification key="3" text='Modern React component module'
          type="danger" onCloseHandler={this.close}
          />
          <Notification key="4" text='Modern React component module'
          type="success" onCloseHandler={this.close}
          />
          <Notification key="5" text='Modern React component module'
          type="danger" onCloseHandler={this.close}
          />
          <Notification key="6" text='Modern React component module'
          type="success" onCloseHandler={this.close}
          />
        </NotificationStack>
        
      </div>
    )
  }
}
