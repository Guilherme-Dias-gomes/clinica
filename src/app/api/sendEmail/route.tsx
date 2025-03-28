import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    console.log('Dados recebidos do formulário:', { name, phone, email, message });

    // Verificar se as variáveis de ambiente estão carregadas corretamente
   console.log('Carregando variáveis de ambiente...');
   console.log('SMTP_HOST:', process.env.SMTP_HOST);
   console.log('SMTP_PORT:', process.env.SMTP_PORT);
   console.log('SMTP_SECURE:', process.env.SMTP_SECURE);
   console.log('SMTP_USER:', process.env.SMTP_USER);
   console.log('SMTP_PASS:', process.env.SMTP_PASS);
   console.log('SMTP_FROM_EMAIL:', process.env.SMTP_FROM_EMAIL);
   console.log('RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL);
    
   if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Erro: As credenciais SMTP (SMTP_USER ou SMTP_PASS) não foram carregadas.');
}
    // Configuração do transporte de e-mail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('Configuração do transporter:', transporter.options);

    // E-mail para o destinatário principal (você)
    const mailToRecipient = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Nova mensagem do formulário de contato',
      text: `
        Nome: ${name}
        Telefone: ${phone}
        Email do usuário: ${email}
        Mensagem: ${message}
      `,
    };

    // E-mail para o usuário que preencheu o formulário
    const mailToUser = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'Cópia do seu contato - TechGD',
      text: `
        Olá, ${name},

        Recebemos sua mensagem e em breve entraremos em contato.

        Aqui estão os detalhes que você enviou:
        - Nome: ${name}
        - Telefone: ${phone}
        - Email: ${email}
        - Mensagem: ${message}

        Obrigado por entrar em contato!
      `,
    };

    console.log('Enviando e-mail para o destinatário principal...');
    await transporter.sendMail(mailToRecipient);
    console.log('E-mail enviado para o destinatário principal.');

    console.log('Enviando e-mail para o usuário...');
    await transporter.sendMail(mailToUser);
    console.log('E-mail enviado para o usuário.');

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ message: 'Erro ao enviar o e-mail.' }, { status: 500 });
  }
}