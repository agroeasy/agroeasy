import emailJs from "emailjs";

/**
 * 
 * Sends mail to the provided email
 * @function
 *  
 * @param {object} req 
 * @param {object} res 
 * 
 * @return {object} containing either success set to true/false and error/message
 */
export const contactUsmail = async (req, res) => {
    try {
        const { EMAIL_HOST, EMAIL_PASSWORD, USER_EMAIL } = process.env;
        const server = emailJs.server.connect({
            host: EMAIL_HOST,
            password: EMAIL_PASSWORD,
            ssl: true,
            user: USER_EMAIL,
        });
        const { email, name, message, subject } = req.body;
        const subjectToUpperCase = subject.toUpperCase();  
        const userMessage = {
            from: email,
            subject: subjectToUpperCase,
            text: `${name} (${email}) says: ${message}`,
            to: USER_EMAIL,
        };
        
        server.send(userMessage, (error, messages) => res.json({ messages, success: true }));
        
    } catch(error){
        res.send({ error, success: false });
    }
};
