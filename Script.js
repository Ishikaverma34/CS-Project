document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Function to apply filter by category or tag
  function filterGallery(criteria) {
    galleryItems.forEach(item => {
      const category = item.dataset.category?.toLowerCase();
      const tags = item.dataset.tags?.toLowerCase().split(',') || [];

      // Match if category OR any tag matches the filter criteria
      if (
        criteria === "all" ||
        category === criteria.toLowerCase() ||
        tags.includes(criteria.toLowerCase())
      ) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });

    // Set active button style
    filterButtons.forEach(btn => btn.classList.remove("active"));
    const targetBtn = Array.from(filterButtons).find(
      btn => btn.textContent.toLowerCase().includes(criteria.toLowerCase())
    );
    if (targetBtn) targetBtn.classList.add("active");
  }

  // Default filter on page load
  filterGallery("all");
});
