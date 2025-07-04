import { lazy } from 'react';
const AboutHome = lazy(() => import('../components/aboutHome'));
const Footer = lazy(() => import('../components/footer'));
const Header = lazy(() => import('../components/Header'));
const Navbar = lazy(() => import('../components/Nav'));
const NewsLetter = lazy(() => import('../components/newsletter'));
const ServiceHome = lazy(() => import('../components/servicrHome'));
const Stat = lazy(() => import('../components/stats'));
const SEO = lazy(() => import('../components/SEO'));
function Home(){
    return <div className="bg-[#ececfc] overflow-hidden w-[100dvw]">
        <SEO 
        title="Home | Parakletus Publishing"
        description="From manuscript to market—fast, affordable, and personalized publishing support."
        keywords = "Nigeria, Nigeria publishers,books,articles, publish,book publishing,publishers,authors,publishing, book editing, AI publishing, African authors, Parakletus, Nigeria writers, manuscript editing, ISBN,self publishing,book editing, book design,book launch"
      />
    <Navbar/>
    <Header/>
    <AboutHome/>
    <ServiceHome/>
    <Stat id="stat"/>
    <NewsLetter/>
    <Footer/>
    </div>
}

export default Home