<script>
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.createElement("button");
  btn.id = "export-pdf-btn";
  btn.textContent = "📄 Export PDF";
  btn.style.position = "fixed";
  btn.style.bottom = "10px";
  btn.style.left = "10px";
  btn.style.backgroundColor = "#0B6884";
  btn.style.color = "#faf5f6";
  btn.style.border = "none";
  btn.style.padding = "8px 14px";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "10000";
  btn.style.fontWeight = "600";
  btn.style.fontSize = "1rem";
  btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  btn.style.userSelect = "none";

  btn.addEventListener("click", () => {
    window.print();
  });

  document.body.appendChild(btn);
});
</script>