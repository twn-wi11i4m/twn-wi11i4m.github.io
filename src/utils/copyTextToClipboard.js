function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Command copied to clipboard!"))
      .catch(() => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          alert("Command copied to clipboard!");
        } catch (err) {
          alert("Unable to copy. Please copy manually.");
        }
        document.body.removeChild(textArea);
      });
  } else {
    alert("Please copy command manually: " + text);
  }
}

export default copyTextToClipboard;
