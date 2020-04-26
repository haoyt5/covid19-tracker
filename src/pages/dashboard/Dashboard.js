import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Card, CardBody, Container } from "reactstrap";
import StatusJumbotron from "../../components/dashboard/StatusJumbotron";

import CaseTable from "../../components/dashboard/CaseTable";
import { getCaseListData } from '../../redux/actions/caseDataActions';
// import Filters from "../../components/dashboard/Filters";
// import filterColumns from "../../components/dashboard/data/filterColumns";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getCaseListData();
  }
  render() {
    const { isLoad, caseData } = this.props;
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
                {/* <Row className="pb-4">
                  <Col>
                    <Card>
                      <CardBody>
                        <Filters isLoad={isLoad} data={caseData} columns={filterColumns}/>
                      </CardBody>
                    </Card>
                  </Col>
                </Row> */}
                <Row >
                  {/* <Col lg="5">
                  </Col> */}
                  <Col lg="12" >
                    <Card className="border-0">
                      <CardBody >
                        <CaseTable isLoad={isLoad} data={caseData}/>
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


const mapStateToProps = (state) => {
  return {
    isLoad:state.casedata.isLoad,
    caseData: state.casedata.caseData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCaseListData: () => dispatch(getCaseListData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
