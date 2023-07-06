// import Layout from "../app/components/layout/Layout";
// import "../styles/globals.css";
import Navbar from "@/app/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}

export default MyApp;
