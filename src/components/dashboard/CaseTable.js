import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
// import ToolkitProvider from "react-bootstrap-table2-toolkit";
import tableColumn from "../../components/dashboard/data/tableColumns";

export class CaseTable extends Component {
  render() {
    return (
      <div style={{minHeight:"25vw"}}>


      <BootstrapTable keyField="id"
                      bordered={false}
                      data={[]}
                      columns={tableColumn}
                      noDataIndication={() => <div className="w-100 text-center">no data</div>}
                      />
    </div>
    )
  }
}

export default CaseTable;
