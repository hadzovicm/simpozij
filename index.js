import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

dotenv.config();



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', {currentPage: 'index'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {currentPage: 'contact'});
});

app.get('/newsletter' , (req, res) => {
    res.render('newsletter', {currentPage: 'newsletter'});
    
});

/*app.post("/submit-form", async (req, res) => {
    const { firstName, lastName, email, phone, organization } = req.body;

    if (!firstName || !lastName || !email || !phone || !organization) {
        return res.status(400).send("All fields are required!");
    }

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, 
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,  // Your destination email
            subject: "New Form Submission",
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nOrganization: ${organization}`,
        });

        res.send("Email sent successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to send email.");
    }
});*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});