export default function Login(){
    return (
    <div className="login">
        <div className="auth-left">
            <img src="/images/loginLogo.svg" alt="" />
        </div>
        <div className="login-container">
            <div className="auth-main auth-main-login">
                <img src="/images/logo.svg" className="auth-main-logo"></img>
                <form action="" className="auth-form">
                    <input type="text" placeholder="Phone number, username, or email"/>
                    <input type="text" placeholder="Password"/>
                    <button className="auth-button">Log in</button>
                </form>
                <span>OR</span>
                <a href="" className="auth-button auth-button-facebook-blue">
                        <img src="/images/facebookBlue.svg" alt="" />
                        Log in with Facebook
                </a>
                <a href="" className="auth-password-link">Forgot password?</a>
            </div>
            <div className="auth-link">
                <p>Don't have an account? <a href="/">Sign up</a></p>
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
    </div>
    )
}