import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Card, CardBody, Container } from "reactstrap";
import StatusJumbotron from "../../components/dashboard/StatusJumbotron";

import CaseTable from "../../components/dashboard/CaseTable";
import { getCaseListData, getCaseMetaData } from '../../redux/actions/caseDataActions';
// import Filters from "../../components/dashboard/Filters";
// import filterColumns from "../../components/dashboard/data/filterColumns";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getCaseListData();
    this.props.getCaseMetaData();
  }
  render() {
    const { isLoad, caseData, metaData } = this.props;
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
                        <CaseTable isLoad={isLoad} data={caseData} metaData={metaData}/>
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
    isLoad:state.casedata.caseList.isLoad,
    caseData: state.casedata.caseList.result,
    metaData:{
      isLoad:state.casedata.metaData.isLoad,
      result:state.casedata.metaData.result
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCaseListData: () => dispatch(getCaseListData()),
    getCaseMetaData: () => dispatch(getCaseMetaData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
