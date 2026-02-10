import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const htmlTemplate = `
      <div style="font-family: Arial; max-width: 600px; margin: auto;">
        <h2 style="color:#2563eb;">📩 Novo Pedido de Orçamento</h2>

        <p><b>Nome:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Telefone:</b> ${data.phone}</p>

        <hr>

        <p><b>Evento:</b> ${data.eventType || "Não informado"}</p>
        <p><b>Data:</b> ${data.eventDate || "Não informada"}</p>
        <p><b>Convidados:</b> ${data.guests || "Não informado"}</p>

        <hr>

        <p><b>Mensagem:</b></p>
        <p>${data.message || "Nenhuma mensagem"}</p>

        <hr>
        <small>Enviado automaticamente pelo site</small>
      </div>
    `

    // EMAIL PARA VOCÊ
    await resend.emails.send({
      from: "Rane Lazer <onboarding@resend.dev>",
      to: ["ranelazer@gmail.com"],
      subject: "📩 Novo Orçamento Recebido",
      html: htmlTemplate,
    })

    // EMAIL PARA O CLIENTE (confirmação)
    if (data.email) {
      await resend.emails.send({
        from: "Rane Lazer <onboarding@resend.dev>",
        to: [data.email],
        subject: "Recebemos seu pedido 🎉",
        html: `
          <h2>Obrigado pelo contato, ${data.name}!</h2>
          <p>Recebemos seu pedido de orçamento.</p>
          <p>Responderemos o mais rápido possível via WhatsApp.</p>
          <br/>
          <small>Rane Lazer</small>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 })
  }
}
