import { ThirdwebProvider } from "thirdweb/react"
import  Header  from '../components/Header';
import '../styles/globals.css';
import { chain } from "../const/exports";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
		activeChain={chain}
			clientId="f0f1caab80bb91af043abe5c9e65eb08"
		>
			<Header/>
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;
