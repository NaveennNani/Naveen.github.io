const Yup = require("yup")

export const formSchema = Yup.object().shape({ 
    username: Yup.string().required ("Username required").min(5), 
    email: Yup.string().required ("Email required"), 
    password: Yup.string().required ("Password required").min(6).max(15)
})