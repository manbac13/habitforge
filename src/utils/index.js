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

export const formatPercentageWithPrecision = (value, precision = 0) => {
  if (value === null || value === undefined || isNaN(value)) return "0";

  const safePrecision = Number.isInteger(precision) ? precision : 0;

  return Number(value).toFixed(safePrecision);
};