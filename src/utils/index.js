export const calculatePercentage = (completed, total) => {
  if (total === 0) return 0; // avoid division by zero
  return Math.floor((completed / total) * 100);
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
