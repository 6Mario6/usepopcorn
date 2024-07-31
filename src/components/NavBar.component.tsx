import { ReactNode } from "react";
import { Logo } from "./Logo.component";

// Stateless component
export const NavBar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="nav-bar">
      {" "}
      <Logo />
      {children}
    </nav>
  );
};
