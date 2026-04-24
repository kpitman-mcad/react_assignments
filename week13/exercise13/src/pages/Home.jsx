import BookList from "../components/BookList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Header title="Theatrical Books and Plays" />
      <Navbar />
      <BookList />
      <Footer />
    </>
  );
}
export default Home;
