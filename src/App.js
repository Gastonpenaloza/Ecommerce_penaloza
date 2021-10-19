import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <ItemListContainer greeting="Bienvenido al E-Commerce" />
    </>
  );
};

export default App;
