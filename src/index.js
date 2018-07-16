import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export class Notification extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onCloseHandler: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.notification = this.notification.bind(this);
    this.state = {
      isDisplayed: true
    };
  }

  onCloseHandler(event) {
    event.preventDefault();
    this.setState({isDisplayed: false});
    if(this.props.onCloseHandler && typeof this.props.onCloseHandler === 'function') {
      this.props.onCloseHandler();
    }
  }

  notification() {
    if(this.state.isDisplayed) {
      const {
        text,
        type,
        onCloseHandler
      } = this.props;
      let icon = '';
      switch(type) {
        case 'danger':
        case 'warning':
         icon = 'fa fa-exclamation-triangle';
        break;
        case 'info':
         icon = 'fa fa-info';
        break;
        case 'success':
         icon = 'fa fa-check';
        break;
      }
      return (
        <NotifyContainer color={type}>
          <NotifyIcon type={icon}></NotifyIcon>
          <NotifyContent text={text} />
          <Close onCloseHandler={this.onCloseHandler}/>
        </NotifyContainer>
      );
    }
    return null;
  }
  render() {
    return this.notification();
  }
}

export class NotificationStack extends Component {
  constructor(props) {
    super(props);
    this.minimizeNotification = this.minimizeNotification.bind(this);
    this.expand = this.expand.bind(this);
    this.state = {
      isExpand: false
    };
  }
  componentDidMount() {
    if(this.props.children) {
      if(Array.isArray(this.props.children)) {
        for(var i = 0, len = this.props.children.length; i < len; i++) {
          const type = this.props.children[i].type;
          if(!type.prototype || (type.prototype && type.prototype.constructor.name !== 'Notification')) {
            throw new Error(`NotificationPanel must be placed inside the Notification Component`);
          }
        }
      }else {
        if(!Array.isArray(this.props.children) && (
          !this.props.children.type.prototype) || (this.props.children.type.prototype.constructor.name !== 'Notification')) {
          throw new Error(`NotificationPanel must be placed inside the Notification Component`);
        } 
      }
    }
  }

  componentDidCatch(error) {
    throw new Error(error);
  }
 
  expand(event) {
    event.preventDefault();
    this.setState({isExpand: true});
  }

  minimizeNotification() {
    return (
      <div className={styles.miniContainer}>
        <legend className={styles.legend}>You have {this.props.children.length} unread Notifications! </legend>
        <div id="arrow" className={styles.mini} onClick={this.expand}>
          <i className={['fa fa-arrow-down', styles.icon].join(' ')} aria-hidden="true"></i>
        </div>
      </div>
    )
  }

  render() {
    const limit = this.props.limit || 2;
    if(this.props.children && this.props.children.length > limit && !this.state.isExpand) {
      return this.minimizeNotification();
    }
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

// functional level components
function NotifyContainer(props) {
  return (<div 
    className={
      [styles.notifyContainer, styles[props.color]].join(' ')
    }>{props.children}</div>);
}

function NotifyIcon(props) {
  return <div className={styles.notifyIcon}><i className={props.type} aria-hidden="true"></i></div>;
}

function NotifyContent(props) {
  return (
    <div className={styles.content}>
      <p>{props.text}</p>
    </div>
  );
}

function Close(props) {
  return (
    <div>
      <button onClick={props.onCloseHandler} className={styles.buttonClose}>
        <i className="fa fa-close" aria-hidden="true"></i>
      </button>
    </div>
  );
}