import Template from "../components/core/Auth/Template";
import signUpImg from "../assets/Images/signup.webp"


const SignUp = () => {
  return (
    <Template
        title="Join the millions learning to code with StudyNotin for free"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        image={signUpImg}
        formType="signup"
    />
  )
}

export default SignUp
