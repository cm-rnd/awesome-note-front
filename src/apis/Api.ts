export async function fetchTeams() {
  return await (await fetch("http://localhost:8000/teams")).json();
}
