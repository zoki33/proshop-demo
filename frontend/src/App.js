import { Container, Toast } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main class="py-3">
        <Container>
          <Outlet></Outlet>
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
