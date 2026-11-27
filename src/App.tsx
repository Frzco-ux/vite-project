import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import PopularArticles from './components/popular-articles/PopularArticles'
import RecentPosts from './components/recent-posts/RecentPosts'
import Features from './components/features/Features'
import Services from './components/services/Services'
import Company from './components/company/Company'
import Inquiry from './components/inquiry/Inquiry'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PopularArticles />
        <RecentPosts />
        <Features />
        <Services />
        <Company />
        <Inquiry />
      </main>
      <Footer />
    </>
  )
}

export default App
