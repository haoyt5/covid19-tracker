import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Container } from "reactstrap";
import StatusJumbotron from "../../components/dashboard/StatusJumbotron";
import Filters from "../../components/dashboard/Filters";
import CaseTable from "../../components/dashboard/CaseTable";

export class Dashboard extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="p-5">
        <Row>
          <Col>
            <StatusJumbotron />
          </Col>
        </Row>
        <Row>
          <Container fluid={true}>
            <Card className="shadow-sm border-0 rounded-lg">
              <CardBody>
                <Row className="pb-4">
                  <Col>
                    <Card>
                      <CardBody>
                        <Filters />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row >
                  <Col lg="5">

                  </Col>
                  <Col lg="7">
                    <Card>
                      <CardBody>
                        <CaseTable />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Container>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
