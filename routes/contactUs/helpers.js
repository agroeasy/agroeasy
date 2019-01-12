import emailJs from "emailjs";

export default {
    contactUsmail: async (req, res) => {
        try {
            const server = await emailJs.server.connect({
                host:    "smtp.gmail.com",
                password:"agroeasy1$##",
                ssl:     true,
                user:    "agroeasy2018@gmail.com",
            });
            const { email, name, message, subject } = req.body;
            const subjectToUpperCase = subject.toUpperCase();
            
            const userMessage = {
                from: email,
                subject: subjectToUpperCase,
                text:    `${name} (${email}) says: ${message}`,
                to: "agroeasy2018@gmail.com",
            };
        
            await server.send(userMessage, (err, message) => res.json({ message, success: true }));
        } catch(error){
            res.send({ error, success: false });
        }
    },
};
