export async function load({ url }) {
  const luukResponse = await fetch(
    "https://fdnd.directus.app/items/person?filter[id][_eq]=176"
  );
  const luukData = await luukResponse.json();

  return { luukInfo: luukData.data };
}