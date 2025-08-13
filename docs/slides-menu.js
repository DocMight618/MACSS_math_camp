<script>
document.addEventListener("DOMContentLoaded", function () {
  const slideshow = window.slideshow;
  if (!slideshow) return;

  // Create the toggle button
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "☰ Menu";
  Object.assign(toggleBtn.style, {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 1000,
    padding: "6px 10px",
    background: "#0B6884",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "25px",
    fontFamily: "'Josefin Sans', Georgia, serif",
  });
  document.body.appendChild(toggleBtn);

  // Create the menu container
  const menu = document.createElement("div");
  Object.assign(menu.style, {
    position: "fixed",
    bottom: "60px",
    left: "20px",
    width: "260px",
    maxHeight: "70vh",
    overflowY: "auto",
    background: "#f5f5f5",
    border: "1px solid #ccc",
    padding: "10px",
    display: "none",
    zIndex: 1000,
    fontFamily: "sans-serif",
    fontSize: "14px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    borderRadius: "4px"
  });

  // Export to PDF button inside the menu
  const exportBtn = document.createElement("button");
  exportBtn.textContent = "📄 Export to PDF";
  Object.assign(exportBtn.style, {
    width: "100%",
    padding: "6px",
    marginBottom: "8px",
    border: "none",
    background: "#0B6884",
    color: "#fff",
    borderRadius: "3px",
    cursor: "pointer"
  });
  exportBtn.addEventListener("click", () => {
    menu.style.display = "none";
    window.print();
  });
  menu.appendChild(exportBtn);

  // Get all slides
  const allSlides = slideshow.getSlides();

  // Build menu items (skip incremental slides)
  let displayNumber = 1;
  allSlides.forEach((slide, internalIndex) => {
    if (slide.properties.continued === "true") {
      return; // skip incremental steps
    }

    const slideElement = document.querySelector(
      `.remark-slide-container:nth-of-type(${internalIndex + 1})`
    );
    const heading = slideElement?.querySelector("h1, h2, h3");
    const title = heading
      ? heading.textContent.trim()
      : `Slide ${displayNumber}`;

    const link = document.createElement("a");
    link.textContent = `${displayNumber}. ${title}`;
    Object.assign(link.style, {
      display: "block",
      color: "#0B6884",
      textDecoration: "none",
      marginBottom: "6px",
      padding: "4px 6px",
      borderRadius: "3px",
      userSelect: "none"
    });

    link.addEventListener("mouseenter", () => {
      link.style.background = "#ddd";
    });
    link.addEventListener("mouseleave", () => {
      link.style.background = "transparent";
    });

    // Use the actual remark.js 1-based slide index
    link.addEventListener("click", (e) => {
      e.preventDefault();
      menu.style.display = "none";
      slideshow.gotoSlide(internalIndex + 1);
    });

    menu.appendChild(link);
    displayNumber++;
  });

  document.body.appendChild(menu);

  // Toggle menu
  toggleBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  });

  // Close on slide change
  slideshow.on("afterShowSlide", () => {
    menu.style.display = "none";
  });
});
</script>
