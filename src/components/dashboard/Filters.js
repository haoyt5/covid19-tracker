import React, { Component } from 'react'
import { Row, Col } from "reactstrap";

export class Filters extends Component {
  render() {
    return (
      <Row>
        <Col lg="5" >
          <Row>
            <Col><label htmlFor=""><strong style={{fontSize:"11px", minWidth:"5ch"}} className="text-truncate d-block">Confirmed Month</strong></label>
            </Col>
            <Col><label htmlFor=""><strong style={{fontSize:"11px", minWidth:"5ch"}} className="text-truncate d-block">Age Group</strong></label></Col>
            <Col><label htmlFor=""><strong style={{fontSize:"11px", minWidth:"5ch"}} className="text-truncate d-block">Imported(Y/N)</strong></label></Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Filters

