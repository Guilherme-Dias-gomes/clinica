import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Configuração do transporte de e-mail
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configuração do e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Nova mensagem do formulário de contato',
      text: `
        Nome: ${name}
        Telefone: ${phone}
        Email do usuário: ${email}
        Mensagem: ${message}
      `,
    };

    // Envia o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao enviar o e-mail.' }, { status: 500 });
  }
}