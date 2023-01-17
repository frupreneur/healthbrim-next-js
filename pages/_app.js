import "@/styles/globals.css";
import Layout from "../components/Layout";
import StateProvider from "@/state";
import { Andika } from "@next/font/google";

const andika = Andika({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
});


export default function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}
