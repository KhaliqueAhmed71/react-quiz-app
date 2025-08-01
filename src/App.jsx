import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Reservation from "./pages/Reservation";
import BlogDetails from "./pages/BlogDetails";
import Blog from "./pages/Blog";
import Menu from "./pages/FoodMenuPage";
import ContactUsPage from "./pages/ContactUsPage";
import About from './pages/About'
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product/:productId" element={<ProductDetailPage />} />
          <Route path="team" element={<Team />} />
          <Route path="/team/:id" element={<TeamDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
