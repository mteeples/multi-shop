import { useNavigation } from "react-router";
import { Circles } from "react-loader-spinner";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const navigation = useNavigation();
  const operationPending =
    navigation.state === "loading" || navigation.state === "submitting";
  return (
    <>
      {operationPending ? (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <TopBar />
          <NavBar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
