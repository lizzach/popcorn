import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode[];
}
export default function Navbar({children}: NavbarProps) {

  return (
    <nav className="nav-bar">
        {children}
    </nav>
  );
}