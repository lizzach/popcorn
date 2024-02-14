import { useState } from "react";
import { ReactNode } from "react";

interface MoviesBoxProps {
  children: ReactNode;
}

export default function MoviesBox({children}: MoviesBoxProps) {
  const [isOpen1, setIsOpen1] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
}