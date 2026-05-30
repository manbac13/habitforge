import { showNotification } from "@/features/notifications/notificationSlice";
import { store } from "@/store";

export const notify = ({
  message = "Something went wrong",
  severity = "info",
}) => {
  store.dispatch(showNotification({ message, severity }));
};
