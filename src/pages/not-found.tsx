import { MoveRight } from "lucide-react";
import { Button } from "@/components/button";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-center gap-6">
        <img
          src="/assets/images/plant-animation.gif"
          alt="Plant GIF"
          className="size-48"
        />

        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="text-primary-lunar text-6xl font-eb-garamond">
            404 - Page Not Found
          </h1>
          <p className="text-secondary font-raleway">
            Sorry, the page you are looking for could not be found.
          </p>
        </div>

        <Button
          variant="outline"
          className="flex flex-row gap-2"
          onClick={backToHome}
        >
          <span>Back to Home</span>
          <MoveRight />
        </Button>
      </div>
    </div>
  );
}
