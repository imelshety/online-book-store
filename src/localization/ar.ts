// Define the type for the localization object
interface Localization {
    [key: string]: string;
  }
  
  // Define the 'ar' localization object
  const ar: Localization = {
    welcomeLogintext: "مرحبا مجدداً",
    goOnEmail: "الدخول الي حسابك ",
    email:"البريد الالكترونى",
    password : "كلمه المرور",
    rememberMe : " نذكرني",
    login:"الدخول",
    register : "التسجيل",
    createNewAccount : "تسجيل حساب جديد",
    role: "الدور",
    admin : "المشرف",
    customer: "العميل",
    send: "إرسال",
    forgetPassword:"نسيت كلمة المرور !!",
    resetPassNow : "إعادة تعيين كلمة المرور الخاصة بك الآن!",
    otp:"كود التوثيق",
    changePassword :"قم بتغيير كلمة المرور الخاصة بك بسهولة",
    oldPassword : "كلمة المرور القديمة",
    newPassword : "كلمة المرور الجديدة",
    save : "الحفظ",


    // Add more key-value pairs as needed
  };
  // Define the 'en' (English) localization object

  
  export  default ar;
  