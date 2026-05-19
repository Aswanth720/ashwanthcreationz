import Hero from "@/components/home/Hero"
import FeaturedSection from "@/components/home/FeaturedSection"
import CategoryShowcase from "@/components/home/CategoryShowcase"
import FeaturedProject from "@/components/home/FeaturedProject"
import LatestArticles from "@/components/home/LatestArticles"
import Newsletter from "@/components/home/Newsletter"

export default function HomePage() {
  return (
    <>
      <Hero />

      <FeaturedSection />

      <CategoryShowcase />

      <LatestArticles />

      <FeaturedProject />

      <Newsletter />
    </>
  )
}