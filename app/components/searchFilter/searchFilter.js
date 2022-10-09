export const searchFilter = () => {
  return `
    <select name="sortBy" id="sortBy">
      <option value="">Ordenar por: </option>
      <option value="oldToYoung" id="oldToYoung">Mayor a menor edad</option>
      <option value="youngToOld" id="youngToOld">Menor a mayor edad</option>
    </select>
    `;
};
