import { NextResponse } from "next/server"
 
// ─────────────────────────────────────────────────────────
// POST /api/calendar/reserva
//
// Cria um evento no Google Calendar quando uma reserva
// é solicitada — aparece automaticamente no iPhone.
// ─────────────────────────────────────────────────────────
 
export async function POST(request: Request) {
  const body = await request.json()
  const { pacote, data, horario, horas, nome, email, telefone } = body
 
  const accessToken = process.env.GOOGLE_CALENDAR_ACCESS_TOKEN
  const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary"
 
  // Se não tiver token configurado, retorna ok silencioso
  if (!accessToken) {
    return NextResponse.json({ ok: true, aviso: "Token não configurado — evento não criado no calendário" })
  }
 
  try {
    // Monta início e fim do evento
    const [hora] = horario.split(":").map(Number)
    const horaFim = (hora + horas) % 24
    const diaFim = hora + horas >= 24
      ? new Date(new Date(data).getTime() + 86400000).toISOString().split("T")[0]
      : data
 
    const eventoBody = {
      summary: `🎉 RESERVA — ${pacote} · ${nome}`,
      description: [
        `Pacote: ${pacote}`,
        `Nome: ${nome}`,
        `Email: ${email}`,
        `Telefone: ${telefone || "Não informado"}`,
        `Horário: ${horario} às ${String(horaFim).padStart(2, "0")}:00`,
        `Status: AGUARDANDO CONFIRMAÇÃO DE PAGAMENTO`,
      ].join("\n"),
      start: {
        dateTime: `${data}T${horario}:00`,
        timeZone: "America/Sao_Paulo",
      },
      end: {
        dateTime: `${diaFim}T${String(horaFim).padStart(2, "0")}:00:00`,
        timeZone: "America/Sao_Paulo",
      },
      colorId: "6", // Laranja no Google Calendar
      attendees: email ? [{ email }] : [],
    }
 
    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventoBody),
      }
    )
 
    if (!res.ok) {
      const err = await res.text()
      console.error("Erro Google Calendar:", err)
      return NextResponse.json({ ok: false, erro: err }, { status: 500 })
    }
 
    const evento = await res.json()
    return NextResponse.json({ ok: true, eventoId: evento.id })
  } catch (error) {
    console.error("Erro ao criar evento:", error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}