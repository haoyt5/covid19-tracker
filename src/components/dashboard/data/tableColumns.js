import React from "react";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const headerStyle = (column, colIndex, { sortElement, filterElement }) =>{
  return (
    <>
        <span style={{ cursor: "pointer", fontSize: "10px" }}>{column.text}{sortElement}</span>
        {/* <label style={{ "visibility": "hidden", width: 0, display: "none" }}>{filterElement}</label> */}
    </>
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
    headerFormatter: headerStyle
  },
  {
    dataField: 'county_city',
    text: 'County(City)',
    sort: true,
    headerFormatter: headerStyle
  },
  {
    dataField: 'gender',
    text: 'Gender',
    sort: true,
    headerFormatter: headerStyle
  },
  {
    dataField: 'age_group',
    text: 'Age Group',
    sort: true,
    headerFormatter: headerStyle
  },
  {
    dataField: 'imported',
    text: 'Imported Or Not',
    sort: true,
    headerFormatter: headerStyle
  },
  {
    dataField: 'confirmed_case_count',
    text: 'Count',
    sort: true,
    headerFormatter: headerStyle
  },

]

export default tableColumns;