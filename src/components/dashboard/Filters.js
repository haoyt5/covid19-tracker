import React, { Component } from 'react'
import { Row, Col } from "reactstrap";

export class Filters extends Component {
  render() {
    return (
      <Row>
        <Col lg="5" >
          <Row>
            <Col>
              <label htmlFor="">Confirmed Month</label>
            </Col>
            <Col><label htmlFor="">Age Group</label></Col>
            <Col><label htmlFor="">Imported Case</label></Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Filters

