import { supabase } from './supabaseClient';

type Character = {
  id: string;
  name: string;
  birthday: string;
  species: string;
  house: string;
  wand: string;
  patronus: string;
  boggart: string;
};

// GET HANDLER
export const getCharacters = async () => {
  let { data: characters, error } = await supabase
    .from('characters')
    .select('*');
  if (error) throw error;
  return characters;
};

// GET BY ID HANDLER
export const getCharacterById = async (id: string) => {
  let { data: character, error } = await supabase
    .from('characters')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return character;
};

// POST HANDLER
export const addCharacter = async (character: Character) => {
  let { data, error } = await supabase
    .from('characters')
    .insert([character]);
  if (error) throw error;
  return data;
};

// DELETE HANDLER
export const deleteCharacter = async (id: string) => {
  let { data, error } = await supabase
    .from('characters')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return data;
};

// PUT HANDLER
export const updateCharacter = async (id: string, name: string, birthday: string, species: string, house: string, wand: string, patronus: string, boggart: string) => {
  let { data, error } = await supabase
    .from('characters')
    .update({ name, birthday, species, house, wand, patronus, boggart })
    .eq('id', id);
  if (error) throw error;
  return data;
};