import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import tableColumn from "../../components/dashboard/data/tableColumns";
import paginationFactory from "react-bootstrap-table2-paginator";
// import ToolkitProvider from "react-bootstrap-table2-toolkit";
import "../../components/dashboard/Dashboard.css";

const customTotalFormatter = (from, to, size) => {
  return (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} {size > 1 ? "Rows" : "Row"}
    </span>
  );
};
const CaseTable = (props)=> {

    const { isLoad, data } = props;
    return (
      <div style={{minHeight:"25vw"}}>
      <BootstrapTable keyField="id"
                      bordered={false}
                      data={isLoad?data:[]}
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
