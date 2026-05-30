import { useDispatch, useSelector } from "react-redux";
import { createGoal, deleteGoal, getAllGoals, updateGoal } from "./goalsSlice";

function useGoals() {
  const dispatch = useDispatch();

  //data
  const loading = useSelector((state) => state.goals.ui.loading);
  const goalsData = useSelector((state) => state.goals.data);

  //actions
  const getAllGoalsAction = () => dispatch(getAllGoals());
  const createGoalAction = (payload) => dispatch(createGoal(payload));
  const updateGoalAction = (payload) => dispatch(updateGoal(payload));
  const deleteGoalAction = (id) => dispatch(deleteGoal(id));

  return {
    loading,
    goalsData,

    createGoalAction,
    updateGoalAction,
    deleteGoalAction,
    getAllGoalsAction,
  };
}

export default useGoals;
