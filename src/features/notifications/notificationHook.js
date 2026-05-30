import { useDispatch, useSelector } from "react-redux";
import { hideNotification, showNotification } from "./notificationSlice";

function useNotification() {
  const dispatch = useDispatch();

  //data
  const open = useSelector((state) => state.notification.open);
  const severity = useSelector((state) => state.notification.severity);
  const message = useSelector((state) => state.notification.message);

  //action
  const showNotificationAction = (payload) =>
    dispatch(showNotification(payload));
  const hideNotificationAction = () => dispatch(hideNotification());
  return {
    open,
    message,
    severity,

    showNotificationAction,
    hideNotificationAction,
  };
}

export default useNotification;
