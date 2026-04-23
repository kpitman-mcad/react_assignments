import BookList from "../components/BookList";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header title="Theatrical Books and Plays" />
      <div>
        <BookList />
      </div>
      <Footer />
    </>
  );
}
export default Home;
