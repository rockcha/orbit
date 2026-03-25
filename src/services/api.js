const BASE_URL = "http://localhost:3001";

const fetchJson = async (endPoint = "", options = {}) => {
  const res = await fetch(`${BASE_URL}${endPoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`HTTP 에러: ${res.status}`);
  }

  return res.json();
};

// 데이터 가져오기 GET

export const getSpaceshipData = async () => fetchJson("/spaceship");

export const getPlanetsData = async () => {
  const data = await fetchJson("/planets");
  return data ?? [];
};

export const getPlanetDataById = async (id) => fetchJson(`/planets/${id}`);

export const getExplorationLogsData = async () => {
  const data = await fetchJson("/explorationLogs");
  return data ?? [];
};

export const getCurrentMissionData = async () => fetchJson("/currentMission");

// 데이터 추가 및 수정

/** planetId, title,content,createdAt */
export const postExplorationLog = async (explorationLog) =>
  fetchJson("/explorationLogs", {
    method: "POST",
    body: JSON.stringify(explorationLog),
  });

/** planetId, content,createdAt */
export const updateExplorationLog = async (id, explorationLog) =>
  fetchJson(`/explorationLogs/${id}`, {
    method: "PATCH",
    body: JSON.stringify(explorationLog),
  });

/** fuel,isDamaged*/
export const updateSpaceshipData = async (spaceshipData) =>
  fetchJson("/spaceship", {
    method: "PATCH",
    body: JSON.stringify(spaceshipData),
  });
