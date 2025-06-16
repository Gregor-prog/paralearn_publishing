    import emailjs from '@emailjs/browser';
    // import.meta.env.VITE_BREVO_API_KEY
export function EmailResponse(username,Email,message){
   const emailJs =  emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
            username:username,
            Email:Email,
            message:message
        },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY } 
    )

    
    return emailJs
}