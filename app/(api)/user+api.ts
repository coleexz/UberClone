import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL!}`);

export async function POST(request: Request) {
  try {
    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return new Response("Missing required fields", { status: 400 });
    }

    const response = await sql`
    INSERT INTO users (
        name,
        email,
        clerk_id
    ) VALUES (
        ${name},
        ${email},
        ${clerkId}
    )
     `;

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {}
}
