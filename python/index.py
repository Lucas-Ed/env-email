import resend
import os
from dotenv import load_dotenv

# lê as variáveis de ambiente
load_dotenv()

key = os.getenv("API_KEY")

resend.api_key = key


r = resend.Emails.send({
    "from": "onboarding@resend.dev",
    "to": "<por-e-mail-de-destino-aqui>",
    "subject": 'Bun + Resend',
    "html": "<p>Primeiro teste de envio de e-mail, usando python, concluído com <strong>sucesso !!!</strong>!</p>"
})
print("E-mail enviado com sucesso!")


