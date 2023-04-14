import "@/styles/globals.css";
import { NavBar } from "./../Components";

const App = ({ Component, pageProps }) => {
  return (
    <section>
      <NavBar />
      <Component {...pageProps} />
    </section>
  );
};

export default App;
