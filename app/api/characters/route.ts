import { addCharacter, getCharacters } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const characters = await getCharacters();
    return NextResponse.json(
      { message: "Success", characters },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json(
      { message: "Error: Internal server error.", err }, 
      { status: 500 }
    );
  };
};

export const POST = async (req: Request, res: Response) => {
  const { id, name, birthday, species, house, wand, patronus, boggart } = await req.json();
  try {
    const character = { id, name, birthday, species, house, wand, patronus, boggart };
    await addCharacter(character);
    return NextResponse.json(
      { message: "Success", character },
      { status: 201 }
    )
  } catch (err) {
    return NextResponse.json(
      { message: "Error: Internal server error.", err }, 
      { status: 500 }
    );
  }
};