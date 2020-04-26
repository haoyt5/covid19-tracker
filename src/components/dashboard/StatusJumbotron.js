import React from "react";
import { Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Statusumbotron = () => {
  return (
    <Jumbotron className="bg-white rounded-lg shadow-sm ">
      <p className="lead">Taiwan COVID-19 cases summarized by region, age group and gender</p>
      <hr />
      <strong>SUMMARY</strong>
      <p>
        This dataset represent the COVID-19 positive confirmed cases in Taiwan by the date of confirmation. The raw data was retrieved from <a target="_blank" rel='noopener noreferrer'
          href={"//data.cdc.gov.tw/en/dataset/agsdctable-day-19cov"}>Taiwan CDC Open Data Portal</a> and was translated from Chinese to English by <a target="_blank" rel='noopener noreferrer'
            href={"//github.com/haoyt5"}><FontAwesomeIcon icon={faGithub} /> haoyt5</a>
      </p>
      <strong>UPDATE PROCESS</strong>
      <p>
        The dataset is real-time fetching from the Taiwan CDC Open Data Portal. According to the description, the source dataset updated daily.
      </p>
    </Jumbotron>
  )
}

export default Statusumbotron;