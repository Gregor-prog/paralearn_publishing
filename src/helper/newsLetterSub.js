
const apiKey = import.meta.env.VITE_BREVO_API_KEY;
  const listId = parseInt(import.meta.env.VITE_BREVO_LIST_ID);
  const fromEmail = import.meta.env.VITE_FROM_EMAIL;    

// const transactionalEmailsApi = new Brevo.TransactionalEmailsApi();

export async function Subscribe(email){
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'api-key': apiKey,
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              email,
              listIds: [listId],
              updateEnabled: true
            })
          });
          console.log(import.meta.env.VITE_BREVO_API_KEY)

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to add contact');
          }

          console.log("suucessfully added user")
          return response

    
}


// export function sendEmail(email){

// }

// export default Subscribe