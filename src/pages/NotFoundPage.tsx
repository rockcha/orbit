import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex-center min-h-screen text-white">
      <Link className="btn-hud" to="/spaceship">
        우주선으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;
