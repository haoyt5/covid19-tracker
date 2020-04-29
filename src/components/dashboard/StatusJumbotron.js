import React from "react";
import { connect } from 'react-redux'
import { Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DateDatacFormatter } from "../../utility/dataConverter";

const Statusumbotron = (props) => {
  // const { } = props;
  const { metadata_created, metadata_modified } = props.metaData.result;
  return (
    <Jumbotron className="bg-white rounded-lg shadow-sm ">
      <p className="lead">Taiwan COVID-19 cases summarized by region, age group and gender</p>
      <hr />
      <strong>SUMMARY</strong>
      <p>
        This dataset represents the COVID-19 positive confirmed cases area, age and gender in Taiwan by the date of confirmation. The raw data is retrieved from <a target="_blank" rel='noopener noreferrer'
          href={"//data.cdc.gov.tw/en/dataset/agsdctable-day-19cov"}>Taiwan CDC Open Data Portal</a> and translated from Chinese to English by <a target="_blank" rel='noopener noreferrer'
            href={"//github.com/haoyt5"}><FontAwesomeIcon icon={faGithub} /> haoyt5</a>.
      </p>
      <strong>UPDATE PROCESS</strong>
      <p>
        It is a daily updated dataset, created at  {<DateDatacFormatter string={metadata_created} />}. The last updated date is {<DateDatacFormatter string={metadata_modified} />}.
      </p>
    </Jumbotron>
  )
}
const mapStateToProps = (state) => {
  return {
    metaData: {
      isLoad: state.casedata.metaData.isLoad,
      result: state.casedata.metaData.result
    }
  }
}
export default connect(mapStateToProps, null)(Statusumbotron);