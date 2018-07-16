'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n/* loading font awesome for icons */\n@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');\n\n/* notify container element style */\n.styles_notifyContainer__1qyWT {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.styles_notifyIcon__3UC-P {\n  font-size: 18px;\n  color: #FFFFFF;\n\n}\n.styles_content__3AW3G {\n  flex: .9;\n}\n.styles_content__3AW3G p {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: 'Times';\n  font-weight: 800;\n}\n\n.styles_buttonClose__Tr36V {\n  color: #FFFFFF;\n  cursor: pointer;\n  background: none;\n  border: none;\n  font-size: 18px;\n}\n\n\n/* notify container element background colour */\n.styles_info__25Ttk {\n  background-color: hsl(204, 86%, 53%);\n}\n.styles_success__2zJ_1 {\n  background-color: hsl(141, 71%, 48%);\n}\n.styles_danger__2QFot {\n  background-color: hsl(348, 100%, 61%);\n}\n.styles_warning__1qzn0 {\n  background-color: hsl(48, 100%, 67%);\n}\n\n\n.styles_miniContainer__HyOZO {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-basis: 50%;\n}\n\n.styles_mini__crBBz {\n  display: inline-block;\n  border-radius: 90%;\n  width: 50px;\n  height: 50px;\n  background-color: #4d4c4d;  \n  color: #FFFFFF;\n  cursor: pointer;\n  margin-left: -10px;\n}\n.styles_legend__cbA0l {\n  color: #FFFFFF;\n  background-color: #4d4c4d;\n  padding: 10px;\n}\n.styles_icon__s6Ddr {\n  position: relative;\n  left: 18px;\n  top: 15px;\n}\n";
var styles = { "notifyContainer": "styles_notifyContainer__1qyWT", "notifyIcon": "styles_notifyIcon__3UC-P", "content": "styles_content__3AW3G", "buttonClose": "styles_buttonClose__Tr36V", "info": "styles_info__25Ttk", "success": "styles_success__2zJ_1", "danger": "styles_danger__2QFot", "warning": "styles_warning__1qzn0", "miniContainer": "styles_miniContainer__HyOZO", "mini": "styles_mini__crBBz", "legend": "styles_legend__cbA0l", "icon": "styles_icon__s6Ddr" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Notification = function (_Component) {
  inherits(Notification, _Component);

  function Notification(props) {
    classCallCheck(this, Notification);

    var _this = possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    _this.onCloseHandler = _this.onCloseHandler.bind(_this);
    _this.notification = _this.notification.bind(_this);
    _this.state = {
      isDisplayed: true
    };
    return _this;
  }

  createClass(Notification, [{
    key: 'onCloseHandler',
    value: function onCloseHandler(event) {
      event.preventDefault();
      this.setState({ isDisplayed: false });
      if (this.props.onCloseHandler && typeof this.props.onCloseHandler === 'function') {
        this.props.onCloseHandler();
      }
    }
  }, {
    key: 'notification',
    value: function notification() {
      if (this.state.isDisplayed) {
        var _props = this.props,
            text = _props.text,
            type = _props.type,
            onCloseHandler = _props.onCloseHandler;

        var icon = '';
        switch (type) {
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
        return React__default.createElement(
          NotifyContainer,
          { color: type },
          React__default.createElement(NotifyIcon, { type: icon }),
          React__default.createElement(NotifyContent, { text: text }),
          React__default.createElement(Close, { onCloseHandler: this.onCloseHandler })
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.notification();
    }
  }]);
  return Notification;
}(React.Component);

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onCloseHandler: PropTypes.func
};
var NotificationStack = function (_Component2) {
  inherits(NotificationStack, _Component2);

  function NotificationStack(props) {
    classCallCheck(this, NotificationStack);

    var _this2 = possibleConstructorReturn(this, (NotificationStack.__proto__ || Object.getPrototypeOf(NotificationStack)).call(this, props));

    _this2.minimizeNotification = _this2.minimizeNotification.bind(_this2);
    _this2.expand = _this2.expand.bind(_this2);
    _this2.state = {
      isExpand: false
    };
    return _this2;
  }

  createClass(NotificationStack, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      for (var i = 0, len = this.props.children.length; i < len; i++) {
        var type = this.props.children[i].type;
        if (!type.prototype || type.prototype && type.prototype.constructor.name !== 'Notification') {
          throw new Error('NotificationPanel must be placed inside the Notification Component');
        }
      }
    }
  }, {
    key: 'componentDidCatch',
    value: function componentDidCatch(error) {
      console.log(error);
      throw new Error(error);
    }
  }, {
    key: 'expand',
    value: function expand(event) {
      event.preventDefault();
      this.setState({ isExpand: true });
    }
  }, {
    key: 'minimizeNotification',
    value: function minimizeNotification() {
      return React__default.createElement(
        'div',
        { className: styles.miniContainer },
        React__default.createElement(
          'legend',
          { className: styles.legend },
          'You have ',
          this.props.children.length,
          ' unread Notifications! '
        ),
        React__default.createElement(
          'div',
          { id: 'arrow', className: styles.mini, onClick: this.expand },
          React__default.createElement('i', { className: ['fa fa-arrow-down', styles.icon].join(' '), 'aria-hidden': 'true' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var limit = this.props.limit || 2;
      if (this.props.children.length > limit && !this.state.isExpand) {
        return this.minimizeNotification();
      }
      return React__default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);
  return NotificationStack;
}(React.Component);

// functional level components
function NotifyContainer(props) {
  return React__default.createElement(
    'div',
    {
      className: [styles.notifyContainer, styles[props.color]].join(' ') },
    props.children
  );
}

function NotifyIcon(props) {
  return React__default.createElement(
    'div',
    { className: styles.notifyIcon },
    React__default.createElement('i', { className: props.type, 'aria-hidden': 'true' })
  );
}

function NotifyContent(props) {
  return React__default.createElement(
    'div',
    { className: styles.content },
    React__default.createElement(
      'p',
      null,
      props.text
    )
  );
}

function Close(props) {
  return React__default.createElement(
    'div',
    null,
    React__default.createElement(
      'button',
      { onClick: props.onCloseHandler, className: styles.buttonClose },
      React__default.createElement('i', { className: 'fa fa-close', 'aria-hidden': 'true' })
    )
  );
}

exports.Notification = Notification;
exports.NotificationStack = NotificationStack;
//# sourceMappingURL=index.js.map
