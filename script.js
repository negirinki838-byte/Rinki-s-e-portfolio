function filterItems(type) {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    if (type === 'all' || item.classList.contains(type)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function openModal(file) {
  document.getElementById("previewModal").style.display = "flex";
  document.getElementById("previewFrame").src = file;
}

function closeModal() {
  document.getElementById("previewModal").style.display = "none";
}