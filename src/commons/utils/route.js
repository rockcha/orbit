export const routeMeta = {
  "/": {
    label: "우주정거장 입구",
    backgroundImage: "/bg/landing.png",
  },
  "/spaceship": {
    label: "우주선",
    backgroundImage: "/bg/spaceship.png",
  },
  "/archive": {
    label: "기록소",
    backgroundImage: "/bg/archive.png",
  },
  "/navigation": {
    label: "항해실",
    backgroundImage: "/bg/navigation.png",
  },
  "/planet": {
    label: "행성",
    backgroundImage: "/bg/planet.png",
  },
  "/travel": {
    label: "항로 구간",
    backgroundImage: "/bg/travel.png",
  },

  notFound: {
    label: "접근 금지 구역",
    backgroundImage: "/bg/notFound.png",
  },
};

export const getLabelByPathname = (pathname) => {
  let path = pathname;
  if (pathname.startsWith("/planet/")) path = "/planet";
  else if (pathname.startsWith("/travel/")) path = "/travel";

  return routeMeta[path] ? routeMeta[path].label : routeMeta.notFound.label;
};

export const getImgUrlByPathname = (pathname) => {
  let path = pathname;
  if (pathname.startsWith("/planet/")) path = "/planet";
  else if (pathname.startsWith("/travel/")) path = "/travel";
  return routeMeta[path]
    ? routeMeta[path].backgroundImage
    : routeMeta.notFound.backgroundImage;
};
