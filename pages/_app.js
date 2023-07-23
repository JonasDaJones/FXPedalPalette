import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

// async function fetcher(...args) {
//   try {
//     const response = await fetch(...args);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

export default function App({ Component, pageProps }) {

  return (
    <>
      
        <GlobalStyle />
        <Component {...pageProps} />
     
    </>
  );
}
//<SWRConfig value={{ fetcher }}></SWRConfig>
