import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div class="container mx-auto py-3">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
