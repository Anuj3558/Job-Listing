import React from 'react';
import { Button, notification } from 'antd';

const Notification = ({mess}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      description:
       mess,
      duration: 5,
    });
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};

export default Notification;