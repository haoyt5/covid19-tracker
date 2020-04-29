import React from 'react';
import Moment from 'react-moment';

export const DateDatacFormatter = ({ string }) => {
  const dateToFormat = Date.parse(string);
  return (
    <Moment format="MMMM DD, YYYY" date={dateToFormat} />
  );
}