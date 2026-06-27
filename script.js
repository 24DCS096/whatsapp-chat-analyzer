function analyzeChat() {
    const fileInput = document.getElementById("fileInput");
    const output = document.getElementById("output");

    if (!fileInput.files.length) {
        alert("Upload a chat file!");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;

        let lines = text.split("\n");
        let totalMessages = lines.length;
        let words = text.split(" ").length;

        output.innerHTML = `
            <h3>Results</h3>
            <p>Total Messages: ${totalMessages}</p>
            <p>Total Words: ${words}</p>
        `;
    };

    reader.readAsText(fileInput.files[0]);
}
