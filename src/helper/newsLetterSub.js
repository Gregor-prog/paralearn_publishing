
// const apiKey = import.meta.env.REACT_APP_BREVO_API_KEY;
let apiKey = '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'
console.log(apiKey)
//   const listId = parseInt(import.meta.env.REACT_APP_BREVO_LIST_ID);
const listId = 26
  const fromEmail = import.meta.env.REACT_APP_FROM_EMAIL;    

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

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to add contact');
          }

          console.log("suucessfully added user")
          return 'success'

    
}


// export function sendEmail(email){

// }

// export default Subscribe