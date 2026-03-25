export const getTimeAgo = (dateString) => {
  if (!dateString) return "";

  const now = new Date();
  const target = new Date(dateString);

  const diff = now.getTime() - target.getTime();

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (diff < 0) return "방금 전"; // 미래 시간 방어

  if (diff < minute) return "방금 전";
  if (diff < hour) return `${Math.floor(diff / minute)}분 전`;
  if (diff < day) return `${Math.floor(diff / hour)}시간 전`;
  if (diff < week) return `${Math.floor(diff / day)}일 전`;
  if (diff < month) return `${Math.floor(diff / week)}주 전`;
  if (diff < year) return `${Math.floor(diff / month)}개월 전`;

  return `${Math.floor(diff / year)}년 전`;
};
