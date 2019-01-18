import emailJs from "emailjs";

export const contactUsmail = async (req, res) => {
    try {
        const server = emailJs.server.connect({
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
            to: process.env.USER_EMAIL,
        };
        
        server.send(userMessage, (error, messages) => res.json({ messages, success: true }));
        
    } catch(error){
        res.send({ error, success: false });
    }
};
