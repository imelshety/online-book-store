// Define the type for the localization object
interface Localization {
    [key: string]: string;
  }
  
  // Define the 'en' localization object
  const en: Localization = {
    welcomeLogintext: "Welcome Back!",
    goOnEmail: "Login to your account",
    email:"email",
    password : "password",
    rememberMe : "Remember Me",
    login:"Login",
    register: "Register",
    createNewAccount: "Create New Account",
    firstName: "First Name",
    lastName: "Last Name",
    role: "Role",
    admin : "admin",
    customer: "customer",
    send: "Send",
    forgetPassword:"Forget Password !!",
    resetPassNow : "Reset Your Password Now !",
     otp : "OTP",
     changePassword :"Change Your Password Easily",
     oldPassword:" Old Password",
     newPassword:" New Password",
     save:" Save",

    // Add more key-value pairs as needed
  };

  
  export  default en;
  