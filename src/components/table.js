import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../styles/themecontext';
import { devices } from '../styles/breakpoints';
import { colorTransition } from '../styles/color';

// styles
const TableContainer = styled.div`
  width: 100%;
  margin-top: 100px;
`;
const TableTitle = styled.h2`
  text-align: left;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${(props) => props.color};
`;
const TableEl = styled.table`
  width: 100%;

  tbody tr {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr;
    border-top: 1px solid ${(props) => props.color};
    transition: border 0.6s ease-in-out;

    @media ${devices.mobile} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    &:last-child {
      border-bottom: 1px solid ${(props) => props.color};
      transition: border 0.6s ease-in-out;
    }

    .time {
      grid-area: 1 / 1 / 2 / 4;
    }

    .description {
      grid-area: 1 / 2 / 2 / 3;
      padding-right: 40px;
      padding-left: 40px;

      @media ${devices.mobile} {
        padding-right: 0;
        padding-left: 0;
      }
    }

    .location {
      grid-area: 1 / 3 / 2 / 4;
    }
  }

  th,
  td {
    color: ${(props) => props.color};
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
    ${colorTransition}

    @media ${devices.mobile} {
      font-size: 14px;
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }
`;

const Table = ({ title, data }) => {
  const { color } = useContext(ThemeContext);
  return (
    <TableContainer color={color.foreground}>
      <TableTitle>{title}</TableTitle>
      <TableEl color={color.foreground}>
        <thead>
          <tr>
            <th className="sr-only">Time</th>
            <th className="sr-only">Description</th>
            <th className="sr-only">Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.time}>
              <td className="time">{item.time}</td>
              <td className="description">{item.description}</td>
              <td className="location">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </TableEl>
    </TableContainer>
  );
};

export default Table;
