const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const currentDate = new Date();

// Options for formatting the date and time
const options = {
  timeZone: 'Asia/Kolkata', // Specify the time zone as IST
  weekday: 'long',           // Display full weekday name
  year: 'numeric',           // Display year
  month: 'long',             // Display full month name
  day: '2-digit',            // Display two-digit day
  hour: '2-digit',           // Display two-digit hour
  minute: '2-digit',         // Display two-digit minute
  second: '2-digit'          // Display two-digit second
};

// Format the date and time in IST
const formattedDateTime = currentDate.toLocaleString('en-IN', options);

const app = express();
const PORT = process.env.PORT || 3000;
const html = `
      <p>Dear user,</p>
      <p>We are delighted to welcome you to Lexxov Digital Services, your premier destination for all your digital needs. Whether you're looking to elevate your online presence, boost your brand's visibility, or streamline your digital operations, we're here to help you achieve your goals.</p>
      <p>At Lexxov Digital Services, we pride ourselves on delivering innovative solutions tailored to meet the unique needs of each of our clients. Our team of experts is dedicated to providing you with top-notch services and exceptional support every step of the way.</p>
      <p>Here's what you can expect from us:</p>
      <ul>
        <li><strong>Customized Solutions:</strong> We understand that every business is different. That's why we take the time to understand your specific requirements and tailor our solutions to align with your objectives.</li>
        <li><strong>Cutting-Edge Technology:</strong> We stay ahead of the curve by leveraging the latest tools and technologies to deliver best-in-class solutions that drive results and exceed expectations.</li>
        <li><strong>Personalized Support:</strong> Your success is our priority. Our team is committed to providing you with personalized support and guidance to ensure that your experience with us is seamless and stress-free.</li>
        <li><strong>Continuous Improvement:</strong> We believe in continuously evolving and improving our services to stay ahead of the curve and deliver exceptional value to our clients.</li>
      </ul>
      <p>Whether you need assistance with website development, digital marketing, branding, or any other digital endeavor, Lexxov Digital Services has you covered.</p>
      <p>We're excited to embark on this journey with you and help you achieve your digital ambitions. If you have any questions or would like to discuss your project further, please don't hesitate to reach out to us.</p>
      <p>Once again, welcome to Lexxov Digital Services! We look forward to partnering with you and making your digital dreams a reality.</p>
      <p>Best regards,</p>
      <p>Aryan,<br>Founder & Creative Head<br>Lexxov Digital Services</p>
    `;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lexxov003@gmail.com', // Your Gmail address
      pass: 'vxqg ober ctiv vths' // Your Gmail password or app-specific password
    }
  });
  async function pushData() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
      await client.connect();
      console.log("Connecting to MongoDB....")
      const db = client.db("userData");
      const collection = db.collection("userCredential");
      const result = await collection.insertOne({ email: email, service: "UI/UX Design" , "Date & Time" : formattedDateTime});
      console.log('Inserted document:', result.insertedId);
    } catch (error) {
      console.error("Error inserting document:", error);
    } finally {
      await client.close();
      console.log("Closing MongoDB connection");
    }
  }
  // Email options
  const mailOptions = {
    from: 'lexxov003@gmail.com',
    to: email, // Use the email obtained from the frontend
    subject: 'Welcome to Lexxov Digital Services!',
    html: html
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    // If email sent successfully, proceed with MongoDB operation
    await pushData();
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


