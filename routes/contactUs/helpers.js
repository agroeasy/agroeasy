import emailJs from "emailjs";

export const contactUsmail = async (req, res) => {
    try {
        const server = await emailJs.server.connect({
            host:    process.env.EMAIL_HOST,
            password: process.env.EMAIL_PASSWORD,
            ssl:     true,
            user:    process.env.USER_EMAIL,
        });
        const { email, name, message, subject } = req.body;
        const subjectToUpperCase = subject.toUpperCase();
            
        const userMessage = {
            from: email,
            subject: subjectToUpperCase,
            text:    `${name} (${email}) says: ${message}`,
            to: "agroeasy2018@gmail.com",
        };
        
        const messages = await server.send(userMessage);
        return res.json({ messages, success: true });
    } catch(error){
        res.send({ error, success: false });
    }
};
