import React from 'react';
import {NotificationStack, Notification} from './'
import { configure, shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('NotificationStack', () => {
  it('is truthy', () => {
    expect(NotificationStack).toBeTruthy()
  });

  it('should render correctly', () => {
    const output = shallow(
      <NotificationStack>
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
      </NotificationStack>
    );
    expect(output.length).toEqual(1);
  });

  it('should throw an error if placed other elements instead of Notification', () => {
    const componentDidMount = spy(NotificationStack.prototype, 'componentDidMount');
    const componentDidCatch = spy(NotificationStack.prototype, 'componentDidCatch');
    const notificationStack = mount(
      <NotificationStack>
        <div>some elements</div>
      </NotificationStack>
    );
    expect(componentDidMount.calledOnce).toEqual(true);
    expect(componentDidCatch).toThrow();
  });

  it('should expand to be false', () => {
    const output = mount(
      <NotificationStack limit="3">
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
      </NotificationStack>
    );
    expect(output.state('isExpand')).toEqual(false);
  });

  it('should call minimizeNotification function', () => {
    const minimizeNotification = spy(NotificationStack.prototype, 'minimizeNotification');
    const output = mount(
      <NotificationStack limit="3">
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
      </NotificationStack>
    );
    expect(minimizeNotification.calledOnce).toEqual(true);
  });

  it('should expand to be true which click down arrow', () => {
    const expand = spy(NotificationStack.prototype, 'expand');
    const output = mount(
      <NotificationStack limit="3">
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
        <Notification text='Modern React component module'
          type="danger">
        </Notification>
      </NotificationStack>
    );
    output.find('#arrow').simulate('click');
    expect(expand.calledOnce).toBeTruthy();
    expect(output.state('isExpand')).toEqual(true);
  });
});

describe('Notification', () => {
  let onClose;
  beforeEach(() => {
    onClose = spy();
  });

  it('is truthy', () => {
    expect(Notification).toBeTruthy();
  });

  it('should render correctly', () => {
    const notificationWrapper = mount(<Notification text='Modern React component module'
      type='danger' onCloseHandler={onClose} />);
    expect(notificationWrapper.state('isDisplayed')).toBeTruthy();
  });

  it('should render info notification', () => {
    const notificationWrapper = mount(
      <NotificationStack>
        <Notification text='Modern React component module'
        type='info'/>
      </NotificationStack>
    );
    const notifyIcon = notificationWrapper.find('NotifyIcon');
    expect(notifyIcon.props().type).toEqual('fa fa-info');
  });

  it('should render success notification', () => {
    const notificationWrapper = mount(
      <NotificationStack>
        <Notification text='Modern React component module'
        type='success'/>
      </NotificationStack>
    );
    const notifyIcon = notificationWrapper.find('NotifyIcon');
    expect(notifyIcon.props().type).toEqual('fa fa-check');
  });

  it('should render danger, warning notification with exclamation triangle icon', () => {
    const notificationDanger = mount(
      <NotificationStack>
        <Notification text='Modern React component module'
        type='danger'/>
      </NotificationStack>
    );
    const notificationWarning = mount(
      <NotificationStack>
        <Notification text='Modern React component module'
        type='warning'/>
      </NotificationStack>
    );
    const dangerIcon = notificationDanger.find('NotifyIcon');
    const warningIcon = notificationWarning.find('NotifyIcon');
    expect(dangerIcon.props().type).toEqual('fa fa-exclamation-triangle');
    expect(warningIcon.props().type).toEqual('fa fa-exclamation-triangle');
  });

  it('should close notification when clicking close button', () => {
    const notificationWrapper = mount(
      <NotificationStack>
        <Notification text='Modern React component module' type='info' 
        onCloseHandler={onClose}/>
      </NotificationStack>
    );
    const close = notificationWrapper.find('Close');
    const button = close.find('button');
    button.simulate('click');
    expect(onClose.calledOnce).toEqual(true);
    expect(notificationWrapper.state('isDisplayed')).toBeFalsy();
  });
});



