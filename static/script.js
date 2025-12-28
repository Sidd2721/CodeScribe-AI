document.getElementById("codeForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const code = document.getElementById("codeInput").value;
    const output = document.getElementById("docResult");

    output.textContent = "Generating documentation...";

    const response = await fetch("/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ code: code })
    });

    const data = await response.json();
    output.textContent = data.documentation;
});
