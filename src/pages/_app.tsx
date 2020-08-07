import App from "next/app";
import i18n from "../i18n";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default i18n.appWithTranslation(MyApp);
