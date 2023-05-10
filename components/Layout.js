import Header from "./organisms/Header";
import NavOverlay from "./organisms/NavOverlay";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
