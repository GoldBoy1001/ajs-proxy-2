export default function specialAttack(character) {
  const characterSpecial = [];
  for (const item of character.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    characterSpecial.push({
      id, name, icon, description,
    });
  }
  return characterSpecial;
}
