import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Captura os dados enviados pelo formulário
    const { nome, email, mensagem, tipo } = body;

    // Validação básica
    if (!nome || !email || !mensagem) {
      return new Response(
        JSON.stringify({ error: "Preencha todos os campos obrigatórios" }),
        { status: 400 }
      );
    }

    // Verifica se é um depoimento para mudar o assunto do e-mail
    const eUmDepoimento = tipo === "DEPOIMENTO";

    const { data, error } = await resend.emails.send({
      from: "Rane Lazer <onboarding@resend.dev>", // Mantenha assim ou use seu domínio verificado
      to: ["ranelazer@gmail.com"],
      subject: eUmDepoimento 
        ? `⭐ NOVO DEPOIMENTO: ${nome}` 
        : `📩 Novo contato do site - ${nome}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #000;">${eUmDepoimento ? "🌟 Você recebeu um novo depoimento!" : "📩 Novo contato recebido"}</h2>
          <hr />
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${mensagem}
          </div>
          <br />
          <p style="font-size: 12px; color: #666;">Enviado via formulário do site Rane Lazer.</p>
        </div>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return Response.json({ success: true, data });

  } catch (error) {
    console.error("Erro na API de e-mail:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno ao processar o envio" }),
      { status: 500 }
    );
  }
}