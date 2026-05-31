let notificationHandler = null;

export const setNotificationHandler = (handler) => {
  notificationHandler = handler;
};

export const triggerNotification = (notification) => {
  notificationHandler?.(notification);
};