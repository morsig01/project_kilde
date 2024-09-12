export const dynamic = 'force-static';

export async function GET() {
  const time = new Date();
  const data = {
    year: time.getFullYear(),
    date: time.toLocaleDateString(),
    time: time.toLocaleTimeString()
  };
  
  return new Response(JSON.stringify({ data }), {
    headers: { 'Content-Type': 'application/json' }
  });
}