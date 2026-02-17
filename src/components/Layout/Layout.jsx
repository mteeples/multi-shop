import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
