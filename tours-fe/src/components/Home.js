import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import TeacherList from "./TeacherList";
import NewTeacherModal from "./NewTeacherModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    teachers: []
  };

  componentDidMount() {
    this.resetState();
  }

  getTeachers = () => {
    axios.get(API_URL).then(res => this.setState({ teachers: res.data }));
  };

  resetState = () => {
    this.getTeachers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        
      </Container>
    );
  }
}

export default Home;