import Navbar from '@/app/component/Navbar'
import HeroSection from './component/HeroSection'
import AchievementSection from '@/app/component/AchivementSection'
import AboutSection from './component/AboutSection'
import EmailSection from './component/EmailSection'
import Footer from './component/Footer'
import Project from './component/Project'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <Project />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
