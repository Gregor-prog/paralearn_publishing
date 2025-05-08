
export async function sendEmail(email){
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': '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',
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
            <h1>Thanks for Subscribing!</h1>
            <p>Here's what you can expect from our newsletter:</p>
            <ul>
              <li>Weekly updates</li>
              <li>Exclusive content</li>
              <li>Special offers</li>
            </ul>
            <p>If you ever want to unsubscribe, just click the link at the bottom of any email.</p>
          `,
          textContent: `Thanks for subscribing!\n\nHere's what you can expect...`
        })
      });
      
    
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send welcome email');
      }
      console.log("send user email is succesfull")
      return 'successfully send email'
    }