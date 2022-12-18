import { Poppins } from "@next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
