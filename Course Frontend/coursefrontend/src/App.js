import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import AllCourse from "./Components/AllCourses";
import Header from "./Components/Header";
import AddCourse from "./Components/AddCourse";
import { Col, Container, Row } from "reactstrap";
import Menus from "./Components/Menus";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Container>
          <ToastContainer />
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/add-course" Component={AddCourse} exact />
                <Route path="/view-courses" Component={AllCourse} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
