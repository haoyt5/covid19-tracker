import React from 'react';
import { Row, Col } from "reactstrap";
import BootstrapTable from 'react-bootstrap-table-next';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import tableColumn from "../../components/dashboard/data/tableColumns";
import paginationFactory from "react-bootstrap-table2-paginator";
import _ from "lodash";
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import "../../components/dashboard/Dashboard.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const customTotalFormatter = (from, to, size) => {
  return (
    <strong style={{ fontSize: "12px" }}>
      Showing {from} to {to} of {size} {size > 1 ? "Rows" : "Row"}
    </strong>
  );
};

const CustomSearchBar = (props) => {
  let input;
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.onSearch(input.value);
    }
  };
  const handleClick = () => {
    props.onSearch(input.value);
  };
  return (
    <div className="d-flex">
      <input
        className="form-control custom-search-bar mr-2"
        ref={n => input = n}
        type="text"
        onKeyPress={event => handleKeyPress(event)}
        placeholder="search"
      />
      <div className="search-button pl-4 pr-4"
        onClick={handleClick}> <span><FontAwesomeIcon icon={faSearch} /></span>
      </div>
    </div>
  );
};

const CaseTable = (props) => {

  const { isLoad, data } = props;
  return (
    <div style={{ minHeight: "25vw" }}>
      <ToolkitProvider
        keyField="id"
        data={isLoad ? _.orderBy(data, ["data_as_of", "confirmed_case_count"], ["desc", "desc"]) : []}
        columns={tableColumn}
        search
      >{
          props => (
            <>
              <Row className="pb-2">
                <Col>
                  <CustomSearchBar {...props.searchProps} />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <BootstrapTable {...props.baseProps}
                    bootstrap4 bordered={false}
                    noDataIndication={() => <div className="w-100 text-center">no data</div>}
                    pagination={paginationFactory({
                      sizePerPage: 10,
                      sizePerPageList: [10],
                      showTotal: true,
                      paginationTotalRenderer: customTotalFormatter,
                    })} />
                </Col>
              </Row>
            </>
          )
        }

      </ToolkitProvider>
    </div>
  )
}

export default CaseTable;
