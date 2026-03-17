import { NextResponse } from "next/server"
 
// ─────────────────────────────────────────────────────────
// GET /api/calendar/disponibilidade?ano=2026&mes=3
//
// Retorna os dias ocupados do mês buscando eventos do
// Google Calendar via API pública (Calendar ID configurado
// nas variáveis de ambiente).
// ─────────────────────────────────────────────────────────
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const ano = parseInt(searchParams.get("ano") || String(new Date().getFullYear()))
  const mes = parseInt(searchParams.get("mes") || String(new Date().getMonth() + 1))
 
  // Primeiro e último dia do mês em ISO
  const inicio = new Date(ano, mes - 1, 1).toISOString()
  const fim = new Date(ano, mes, 0, 23, 59, 59).toISOString()
 
  const calendarId = process.env.GOOGLE_CALENDAR_ID
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY
 
  // Se não tiver credenciais configuradas, retorna vazio
  // (admin confirma disponibilidade manualmente pelo WhatsApp)
  if (!calendarId || !apiKey) {
    return NextResponse.json({ ocupados: [] })
  }
 
  try {
    const url = new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events")
    url.searchParams.set("key", apiKey)
    url.searchParams.set("calendarId", calendarId)
    url.searchParams.set("timeMin", inicio)
    url.searchParams.set("timeMax", fim)
    url.searchParams.set("singleEvents", "true")
    url.searchParams.set("orderBy", "startTime")
 
    const res = await fetch(url.toString())
 
    if (!res.ok) {
      return NextResponse.json({ ocupados: [] })
    }
 
    const data = await res.json()
    const eventos = data.items || []
 
    // Extrai os dias únicos que têm eventos
    const diasOcupados = new Set<string>()
 
    for (const evento of eventos) {
      // Evento de dia inteiro
      if (evento.start?.date) {
        diasOcupados.add(evento.start.date) // "2026-03-15"
        continue
      }
      // Evento com horário — bloqueia o dia
      if (evento.start?.dateTime) {
        const dia = evento.start.dateTime.split("T")[0]
        diasOcupados.add(dia)
      }
    }
 
    return NextResponse.json({ ocupados: Array.from(diasOcupados) })
  } catch (error) {
    console.error("Erro ao buscar calendário:", error)
    return NextResponse.json({ ocupados: [] })
  }
}