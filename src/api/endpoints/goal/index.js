import axiosInstance from "@/api";

const GOALS_API = "/api/goal";

export const goalsApi = {
  getAllGoals: () => {
    return axiosInstance.get(`${GOALS_API}`);
  },

  createGoal: (payload) => {
    return axiosInstance.post(`${GOALS_API}`, payload);
  },

  updateGoal: (payload) => {
    const { id, ...data } = payload;
    return axiosInstance.patch(`${GOALS_API}/${id}`, data);
  },

  deleteGoal: (id) => {
    return axiosInstance.delete(`${GOALS_API}/${id}`);
  },
};
