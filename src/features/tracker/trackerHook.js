import { useDispatch, useSelector } from "react-redux";
import {
  addTrackerData,
  deleteTrackerData,
  updateTrackerData,
} from "./trackerSlice";

function useTracker() {
  const dispatch = useDispatch();

  //data
  const goalsList = useSelector((state) => state.tracker.data);

  const addTrackerDataAction = (data) => dispatch(addTrackerData(data));
  const updateTrackerDataAction = (data) => dispatch(updateTrackerData(data));
  const deleteTrackerDataAction = (id) => dispatch(deleteTrackerData(id));

  return {
    goalsList,

    addTrackerDataAction,
    updateTrackerDataAction,
    deleteTrackerDataAction,
  };
}

export default useTracker;
