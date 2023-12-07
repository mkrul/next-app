import { NextResponse, NextRequest } from "next/server";
import schema from "./schema";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }
  return NextResponse.json(
    {
      id: 1,
      name: body.name,
      price: body.price,
    },
    { status: 200 }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  return NextResponse.json(
    {
      id: params.id,
    },
    { status: 200 }
  );
}
