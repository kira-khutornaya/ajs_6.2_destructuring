export default function showSpecialInfo({ special }) {
  const array = [];

  for (const {
    id, name, icon, description = 'Описание недоступно',
  } of special) {
    array.push({
      id, name, icon, description,
    });
  }

  return array;
}
