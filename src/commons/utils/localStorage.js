const STOARGE_KEY = "orbit_exploration";

export const getIsExploring = () => {
  const data = getExploration();
  if (!data) return false;
  return data.isExploring;
};

export const getExploration = () => {
  return JSON.parse(localStorage.getItem(STOARGE_KEY));
};

export const updateExploration = (exploration) => {
  localStorage.setItem(STOARGE_KEY, JSON.stringify(exploration));
};
