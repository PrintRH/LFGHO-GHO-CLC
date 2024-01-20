// LoanTable.tsx

import React, { useState } from 'react';
import styles from "../styles/Home.module.css";

interface LoanTableProps {
  rowNames: string[];
}

const LoanTable: React.FC<LoanTableProps> = ({ rowNames }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.loanTable}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}></th>
            <th style={tableHeaderStyle}>Total Supplied</th>
            <th style={tableHeaderStyle}>Supply API</th>
            <th style={tableHeaderStyle}>Total Borrows</th>
            <th style={tableHeaderStyle}>Borrow API (Variable)</th>
          </tr>
        </thead>
        <tbody>
          {rowNames.map((rowName, index) => (
            <tr
              key={index}
              style={selectedRow === index ? selectedRowStyle : undefined}
              onClick={() => handleRowClick(index)}
              className={styles['enlarge-on-hover']} // Use the CSS module class
            >
              <td style={tableCellStyle}>{rowName}</td>
              <td style={tableCellStyle}>$800K</td>
              <td style={tableCellStyle}>0.01%</td>
              <td style={tableCellStyle}>$0</td>
              <td style={tableCellStyle}>0.01%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  padding: '15px',
  textAlign: 'left',
  borderTop: '2px solid #009688',
  borderBottom: '2px solid #009688',
  borderRight: '1px solid #009688',
  borderLeft: '1px solid #009688',
  cursor: 'pointer',
};

const tableCellStyle: React.CSSProperties = {
  padding: '15px',
  textAlign: 'left',
  borderBottom: '1px solid #009688',
  borderLeft: '1px solid #009688',
  borderRight: '1px solid #009688',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.3s',
};

const selectedRowStyle: React.CSSProperties = {
  backgroundColor: '#34495E', // Darker color when row is selected
};

export default LoanTable;
