import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, phone, postcode, vehicle, service, description } = await request.json()

    if (!name || !phone || !postcode || !vehicle || !service || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Weldsmith <noreply@weldsmith.co.uk>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Quote Request from ${name} — ${service}`,
      html: `
        <h2>New Quote Request</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr>
            <td style="font-weight:bold;border-bottom:1px solid #eee;width:140px">Name</td>
            <td style="border-bottom:1px solid #eee">${name}</td>
          </tr>
          <tr>
            <td style="font-weight:bold;border-bottom:1px solid #eee">Phone</td>
            <td style="border-bottom:1px solid #eee"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="font-weight:bold;border-bottom:1px solid #eee">Postcode</td>
            <td style="border-bottom:1px solid #eee">${postcode}</td>
          </tr>
          <tr>
            <td style="font-weight:bold;border-bottom:1px solid #eee">Vehicle</td>
            <td style="border-bottom:1px solid #eee">${vehicle}</td>
          </tr>
          <tr>
            <td style="font-weight:bold;border-bottom:1px solid #eee">Service</td>
            <td style="border-bottom:1px solid #eee">${service}</td>
          </tr>
          <tr>
            <td style="font-weight:bold;vertical-align:top">Description</td>
            <td style="white-space:pre-wrap">${description}</td>
          </tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
