import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ThemeContext from '../styles/themecontext';
import { devices } from '../styles/breakpoints';
import { moduleSpace } from '../styles/container';
import anime from 'animejs/lib/anime.es.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// styles
const TableContainer = styled.div`
  width: 100%;
  ${moduleSpace}
`;
const TableTitle = styled.h2`
  text-align: left;
  margin-bottom: 80px;
  color: ${(props) => props.color};

  @media ${devices.tablet} {
    margin-bottom: 40px;
  }
`;
const TableEl = styled.table`
  width: 100%;

  tbody tr {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr;
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

    &:not(:last-child) {
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

    @media ${devices.mobile} {
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }

  a {
    text-decoration: none;
    padding: 5px;
    display: inline-block;

    @media ${devices.mobile} {
      padding: 0;
    }
  }

  span {
    padding: 5px;

    @media ${devices.mobile} {
      padding: 0;
    }
  }
`;

const Table = ({ targetId, title, rows }) => {
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
      delay: 500,
    });
  }, []);

  return (
    <TableContainer color={color.foreground} ref={table} id={targetId}>
      <TableTitle className="container">{title}</TableTitle>
      <TableEl color={color.foreground}>
        <thead>
          <tr>
            <th className="sr-only">Date</th>
            <th className="sr-only">Description</th>
            <th className="sr-only">Location</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={`${item.date}-${index}`}>
              <td className="time">{item.date}</td>
              <td className="description">
                <a
                  color={color.foreground}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {documentToReactComponents(JSON.parse(item.text.raw))}
                </a>
              </td>
              <td className="location">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </TableEl>
    </TableContainer>
  );
};

export default Table;
