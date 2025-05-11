const apiKey = import.meta.env.VITE_BREVO_API_KEY;
  const listId = parseInt(import.meta.env.VITE_BREVO_LIST_ID);
export async function sendEmail(email){
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': apiKey,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          sender: {
            email: 'parakletuspublishing@gmail.com',
            name: 'Parakletus Publishing'
          },
          to: [{ email }],
          subject: 'Welcome to Parakletus Newsletter!',
          htmlContent: `
            <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome to Parakletus Publishing</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f8f8;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    h1 {
      font-size: 24px;
      color: #2c3e50;
    }
    h2 {
      font-size: 20px;
      color: #1a73e8;
      margin-top: 0;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 10px;
    }
    .footer {
      margin-top: 30px;
      font-size: 14px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Your Journey as a Writer Just Got Better</h2>

    <p>Welcome to <strong>Parakletus Publishing</strong>, and thank you for subscribing to our newsletter!</p>
    <p>We’re thrilled to have you in our community and committed to supporting you at every stage of your writing journey.</p>

    <p>Here’s what you can look forward to:</p>
    <ul>
      <li>✍️ <strong>Expert tips</strong> on writing, editing, and publishing</li>
      <li>📚 <strong>Resources</strong> to help you grow as an author</li>
      <li>🛠️ <strong>Updates</strong> on our latest services, tools, and exclusive offers</li>
      <li>💡 <strong>Encouragement and inspiration</strong> to keep you writing</li>
    </ul>

    <p>Whether you’re brainstorming your first draft or preparing to launch your book, you're in the right place.</p>

    <p>If you ever have questions or need support, just reply to this email—we’re always here to help.</p>

    <p>Stay tuned. Stay inspired.</p>

    <p>Warm regards,<br>
    <strong>The Parakletus Publishing Team</strong></p>

    <div class="footer">
      <p>You’re receiving this email because you subscribed to Parakletus Publishing updates.</p>
    </div>
  </div>
</body>
</html>

          `,
          textContent: `Thanks for subscribing!\n\nHere's what you can expect...`
        })
      });
      
    
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send welcome email');
      }
      console.log("send user email is succesfull")
      return response
    }