import { useNavigate } from "react-router-dom";
import { useMediaQueries } from "../hooks/UseMedia";

function Back() {
  const navigate = useNavigate();
  const { lg } = useMediaQueries();
  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute left-4 top-4 z-50 leading-none"
    >
      {lg ? (
        "Geri dön"
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <path
            d="M21 25L15 19L21 13M37 19C37 9.05887 28.9411 1 19 1C9.05887 1 1 9.05887 1 19C1 28.9411 9.05887 37 19 37C28.9411 37 37 28.9411 37 19Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default Back;
