import { ReactNode } from "react";
// Structural component
export const Main = ({ children }: { children: ReactNode }) => {
  return <main className="main">{children}</main>;
};
