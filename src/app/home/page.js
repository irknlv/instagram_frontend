import HeaderProfile from "@/components/headerProfile";
import Footer from "@/components/footer"
import SocialMedia from "@/components/socialMedia";
export default function Home(){
  return (
    <main>
      <div className="border-header">
        <div className="wrapper-page">
          <HeaderProfile></HeaderProfile>
        </div>
      </div>
      <div className="wrapper-page">
        <SocialMedia></SocialMedia>
      </div>
      <Footer></Footer>
    </main>
  )
}
