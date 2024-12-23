import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ name: "Benja", age: 20, location: "idk" });
}
