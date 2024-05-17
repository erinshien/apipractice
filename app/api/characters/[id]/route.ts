import { getCharacterById, updateCharacter, deleteCharacter } from "@/lib/data";
import { NextResponse } from "next/server";

// GET CHARACTER BY ID
export const GET = async (req: Request) => {
  try {
    const id = req.url.split("characters/")[1];
    const character = getCharacterById(id);
    if (!character) {
      return NextResponse.json(
        { message: "Error: Character not found." },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Success", character },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json (
      { message: "Error: Internal server error." },
      { status: 500 }
    )
  }
};

// UPDATE CHARACTER BY ID
export const PUT = async (req: Request) => {
  try {
    const { name, birthday, species, house, wand, patronus, boggart } = await req.json();
    const id = req.url.split("characters/")[1];
    updateCharacter( id, name, birthday, species, house, wand, patronus, boggart);
    return NextResponse.json(
      { message: "Success"},
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json (
      { message: "Error: Internal server error." },
      { status: 500 }
    )
  }
}

// DELETE CHARACTER BY ID
export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("characters/")[1];
    deleteCharacter(id);
    return NextResponse.json(
      { message: "Success"},
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json (
      { message: "Error: Internal server error." },
      { status: 500 }
    )
  }
}