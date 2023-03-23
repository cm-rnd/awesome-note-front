export async function fetchTeams() {
  return await (
    await fetch("http://192.168.159.42:20000/api/v1/folders")
  ).json();
}
