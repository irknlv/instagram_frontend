import Footer from "@/components/footer";

export default function Registration(){
    return (
        <div className="auth">
            <div className="auth-main">
                <img src="/images/logo.svg"></img>
                <p>Sign up to see photos and videos from your friends.</p>
                <a href="" className="auth-button">
                    <img src="/images/facebook.svg" alt="" />
                    Log in with Facebook
                </a>
                <span>OR</span>
                <form action="" className="auth-form">
                    <input type="text" placeholder="Mobile Number or Email"/>
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <span>People who use our service may have uploaded your contact information to Instagram. <a href="">Learn More</a></span>
                    <span>By signing up, you agree to our <a href="">Terms</a> , <a href="">Privacy Policy</a> and <a href="">Cookies Policy.</a></span>
                    <button className="auth-button">Sign Up</button>
                </form>
            </div>
            <div className="auth-link">
                <p>Have an account? <a href="/login">Log in</a></p>
            </div>
            <span>Get the app.</span>
            <div className="auth-links">
                <a href="">
                    <img src="/images/googlePlay.svg" alt="" />
                </a>
                <a href="">
                    <img src="/images/microsoft.svg" alt="" />
                </a>
            </div>
        </div>
    )
}