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
            <th style={tableHeaderStyle}><button className={styles.table1}>Total Supplies</button></th>
            <th style={tableHeaderStyle}><button className={styles.table1}>Supply API</button></th>
            <th style={tableHeaderStyle}><button className={styles.table1}>Total Borrows</button></th>
            <th style={tableHeaderStyle}><button className={styles.table1}>Borrow API</button></th>
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
              <td style={tableCellStyle}><button className={styles.table1}>{rowName}</button></td>
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
  padding: '45px',
  textAlign: 'left',
  cursor: 'pointer',
};

const tableCellStyle: React.CSSProperties = {
  padding: '45px',
  textAlign: 'left',
  cursor: 'pointer',
  marginBottom: '100px', // Add vertical space between rows (adjust the value as needed)
};


export default LoanTable;
