import { Resend } from 'resend';

const resend = new Resend('</Sua-chave-de-api-aqui>');

resend.emails.send({
    from: 'onboarding@resend.dev',
    to: '<por-e-mail-de-destino-aqui>',
    subject: 'Bun + Resend',
    html: '<p>Primeiro teste de envio de e-mail, usando Node, concluído com <strong>sucesso !!!</strong>!</p>'
})
.then(response => {
    console.log("E-mail enviado !!!");
})
.catch(error => {
    console.log("Envio do e-mail falhou !!!");
})