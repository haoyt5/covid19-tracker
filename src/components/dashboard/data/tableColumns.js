import React from "react";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
const headerStyleObject = (styleObject) => {
  return styleObject
}

const headerFormat = (column, colIndex, { sortElement, filterElement }) =>{
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
    headerFormatter: headerFormat,
    headerStyle: headerStyleObject({ width: "22%" }) 

  },
  {
    dataField: 'confirmed_case_count',
    text: 'Count',
    sort: true,
    headerFormatter: headerFormat,
    headerStyle: headerStyleObject({ width: "12%" }) 
  },
  {
    dataField: 'county_city',
    text: 'County(City)',
    sort: true,
    headerFormatter: headerFormat,
    headerStyle: headerStyleObject({ width: "22%" }) 
  },
  {
    dataField: 'gender',
    text: 'Gender',
    sort: true,
    headerFormatter: headerFormat
  },
  {
    dataField: 'age_group',
    text: 'Age Group',
    sort: true,
    headerFormatter: headerFormat
  },
  {
    dataField: 'imported',
    text: 'Imported',
    sort: true,
    headerFormatter: headerFormat,
   
  },


]

export default tableColumns;