import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nome, email, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return new Response(
        JSON.stringify({ error: "Preencha todos os campos" }),
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Rane Lazer <onboarding@resend.dev>", // depois troque pelo seu domínio
      to: ["ranelazer@gmail.com"], // email que vai receber
      subject: `Novo contato do site - ${nome}`,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Erro ao enviar email" }),
      { status: 500 }
    );
  }
}