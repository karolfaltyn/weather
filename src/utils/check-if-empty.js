export function checkIfEmpty() {
  const input = document.getElementById("input");

  if (!input.value.length) {
    alert("Type a city!");
    return window.location.reload();
  }
}
