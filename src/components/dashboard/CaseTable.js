import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import tableColumn from "../../components/dashboard/data/tableColumns";
import paginationFactory from "react-bootstrap-table2-paginator";
import _ from "lodash";
// import ToolkitProvider from "react-bootstrap-table2-toolkit";
import "../../components/dashboard/Dashboard.css";

const customTotalFormatter = (from, to, size) => {
  return (
    <small className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} {size > 1 ? "Rows" : "Row"}
    </small>
  );
};
const CaseTable = (props)=> {

    const { isLoad, data } = props;
    return (
      <div style={{minHeight:"25vw"}}>
      <BootstrapTable keyField="id"
                      bootstrap4
                      bordered={false}
                      // data={isLoad?data:[]}
                      data={isLoad?_.orderBy(data,["data_as_of","confirmed_case_count"],["desc","desc"]):[]}
                      columns={tableColumn}
                      noDataIndication={() => <div className="w-100 text-center">no data</div>}
                      pagination={ paginationFactory({
                        sizePerPage: 10,
                        sizePerPageList: [10],
                        showTotal: true,
                        paginationTotalRenderer: customTotalFormatter,
                      }) } 
                      />
    </div>
    )
}

export default CaseTable;
