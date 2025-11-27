import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

function MainLayout() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
