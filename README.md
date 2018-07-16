# react-notification

> React Notification component will be useful for anyone to notifiy some information on their react applications or website.

[![NPM](https://img.shields.io/npm/v/react-notification.svg)](https://www.npmjs.com/package/react-notification) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

*Build Status*:

[![Build Status](https://github.com/sajanv88/react-notification.git?branch=master)](https://github.com/{sajanv88}/react-notification)


## Install

```bash
npm install --save @sajankumarv88/react-notification
```

## Usage

```jsx
import React, { Component } from 'react'

import {NotificationStack, Notification} from '@sajankumarv88/react-notification'

class Example extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    console.log('notification closed');
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
```

## License

MIT © [sajankumar](https://github.com/sajanv88)
