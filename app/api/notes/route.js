import { promises as fs } from 'fs';

export async function GET(request) {
    let data;
    try {
        data = await fs.readFile(`./notes/Data-Structure-Algorithm.pdf`)
    } catch (error) {
        return Response.json({ error: "No Such blog Found" })
    }
    return new Response(data, {
        status: 200,
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="Data-Structure-Algorithm.pdf"'
        }
    });
}