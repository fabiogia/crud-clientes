import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import MenuSide from './shared/menu-side';

export default async function Home() {
  const styles = {
    link: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "12px",
      borderRadius: "4px",
      textDecoration: "none"
    },
  };

  return (<>
    {/* <div style={{ textAlign: "center", padding: "20px" }}>
      <Link href="/clientes" style={styles.link}>Cadastro de Clientes</Link>
    </div> */}
  </>)
}
