import HeaderProfile from "@/components/headerProfile";
import UserProfile from "@/components/userProfile";
import NewPost from "@/components/newPost";

export default function ProfilePage(){
  return (
    <main>
      <div className="border-profile">
        <div className="wrapper-profile">
          <HeaderProfile></HeaderProfile>
        </div>
      </div>
      <div className="wrapper-profile">
        <UserProfile></UserProfile>
      </div>
    </main>
  )
}
