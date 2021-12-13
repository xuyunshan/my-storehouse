import React from 'react';
import ReactDOM from 'react-dom';
import ToastBox from './toast';
import './toast.scss';

// TODO：convert to custom hooks
function createNotification() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const notification = ReactDOM.render(<ToastBox />, div);
  return {
    addNotice(notice) {
      return notification.addNotice(notice);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
}

let notification;
const notice = (type, content, duration = 2000, onClose) => {
  if (!notification) notification = createNotification();
  return notification.addNotice({ type, content, duration, onClose });
};

const Toast = {
  info(content, duration, onClose) {
    return notice('info', content, duration, onClose);
  },
};

export default Toast;
