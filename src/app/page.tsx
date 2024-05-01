import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import MenuSide from './shared/menu-side-v2';

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

  return (<><h1 className='pt-4 text-4xl text-center'>Sistema Manager</h1></>)
}
