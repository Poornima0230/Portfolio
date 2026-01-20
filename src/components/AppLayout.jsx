import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "./ScrollTop";

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <main className="content">
        <Outlet />
        <Footer />
      </main>
      <ScrollToTopButton />
    </div>
  );
};
