import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ThemeContext from '../styles/themecontext';
import { devices } from '../styles/breakpoints';
import { moduleSpace } from '../styles/container';
import { colorTransition } from '../styles/color';
import anime from 'animejs/lib/anime.es.js';

// styles
const TableContainer = styled.div`
  width: 100%;
  ${moduleSpace}
`;
const TableTitle = styled.h2`
  text-align: left;
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 500;
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
    padding-right: 30px;
    padding-left: 30px;

    @media ${devices.mobile} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 20px;
      padding-left: 20px;
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
    display: flex;
    align-items: center;
    ${colorTransition}

    @media ${devices.mobile} {
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }

  a {
    color: ${(props) => props.color};
    text-decoration: none;
    padding: 5px;
    display: inline-block;
    ${colorTransition}

    @media ${devices.mobile} {
      padding: 0;
    }

    &:focus-visible {
      outline: 1px solid ${(props) => props.color};
    }
  }
`;

const Table = ({ title, data }) => {
  const table = useRef(null);
  const { color } = useContext(ThemeContext);

  useEffect(() => {
    anime.timeline().add({
      targets: table.current,
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: 1500,
    });
  }, []);

  return (
    <TableContainer color={color.foreground} ref={table}>
      <TableTitle className="container">{title}</TableTitle>
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
              <td
                className="description"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <td className="location">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </TableEl>
    </TableContainer>
  );
};

export default Table;
