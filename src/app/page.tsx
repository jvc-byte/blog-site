import Nav from "@/components/nav";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsletter-section";
import Blog from "@/components/blog";
import Feature from "@/components/feature";
export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Feature />
      <Newsletter />
      <Blog />
      <Footer />
    </>
  );
}
