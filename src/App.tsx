import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import TaxForm from "./components/TaxForm";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Container>
        <TaxForm />
      </Container>
      <Footer />
    </div>
  );
}
