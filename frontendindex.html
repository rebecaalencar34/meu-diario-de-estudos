async function salvarNota() {
 const texto = document.getElementById("texto").value;
 if (!texto.trim()) return alert("Digite algo!");
 await fetch("/api/criarNota", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ conteudo: texto })
 });
 document.getElementById("texto").value = "";
 listarNotas();
}
async function listarNotas() {
 const res = await fetch("/api/listarNotas");
 const notas = await res.json();
 const lista = document.getElementById("notas");
 lista.innerHTML = "";
 notas.forEach(n => {
 const li = document.createElement("li");
 li.textContent = n.conteudo;
 lista.appendChild(li);
 });
}
listarNotas();