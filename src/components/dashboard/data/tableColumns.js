import React from "react";
import Moment from 'react-moment';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
const headerStyleObject = (styleObject) => {
  return styleObject
}

const headerFormat = (column, colIndex, { sortElement, filterElement }) => {
  return (
    <>
      <div title={column.text}
        className="text-truncate d-block"
        style={{ cursor: "pointer", fontSize: "12px", minWidth: "5ch" }}
      >{column.text}{sortElement}</div>
      {/* <label style={{ "visibility": "hidden", width: 0, display: "none" }}>{filterElement}</label> */}
    </>
  );
}
const rowFormat = (cell) => {
  return (
    <span title={cell} className="text-truncate d-block"
    style={{minWidth: "5ch" }}><small>{cell}</small></span>
  );
}
export const timeStampRowFormat = (cell) => {
  if (!cell) {
    return "";
  }
  return (
    <span title={cell} className="text-truncate d-block"
    style={{minWidth: "5ch" }}><small>
                  <Moment format="MMMM DD YYYY">
                  {cell}
            </Moment>
    </small>
    </span>
  );
}

const tableColumns = [
  {
    dataField: 'id',
    hidden: true
  },
  {
    dataField: 'data_as_of',
    text: 'Confirmed Date',
    sort: true,
    headerFormatter: headerFormat,
    headerStyle: headerStyleObject({ width: "22%" }),
    formatter: rowFormat
  },
  {
    dataField: 'confirmed_case_count',
    text: 'Count',
    sort: true,
    headerFormatter: headerFormat,
    headerStyle: headerStyleObject({ width: "12%" }),
    formatter: rowFormat
  },
  {
    dataField: 'county_city',
    text: 'County/City',
    sort: true,
    headerFormatter: headerFormat,
    headerStyle: headerStyleObject({ width: "22%" }),
    formatter: rowFormat
  },
  {
    dataField: 'gender',
    text: 'Gender',
    sort: true,
    headerFormatter: headerFormat,
    formatter: rowFormat
  },
  {
    dataField: 'age_group',
    text: 'Age Group',
    sort: true,
    headerFormatter: headerFormat,
    formatter: rowFormat
  },
  {
    dataField: 'imported',
    text: 'Imported',
    sort: true,
    headerFormatter: headerFormat,
    formatter: rowFormat

  },


]

export default tableColumns;