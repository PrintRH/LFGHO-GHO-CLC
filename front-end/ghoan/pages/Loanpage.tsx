import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Nav from "../components/nav";
import LoanTable from "../components/loantable";

const LoanPage: NextPage = () => {
    const rowNames = ['ethereum', 'aave'];

  return (
    <main className={styles.main}>
      <Nav/>
      <div style={containerStyle}>
        <LoanTable rowNames={rowNames}/>
      </div>
    </main>
  );
};

export default LoanPage;

const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // This ensures the container takes the full height of the viewport
  };

  const tableHeaderStyle: React.CSSProperties = {
    background: '#f2f2f2',
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };
  
  const tableCellStyle: React.CSSProperties = {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };