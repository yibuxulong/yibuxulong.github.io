(function () {
  var modal = document.getElementById("bibtex-modal");
  if (!modal) return;

  var contentEl = document.getElementById("bibtex-modal-content");
  var copyBtn = document.getElementById("bibtex-copy-btn");
  var closeBtn = modal.querySelector(".bibtex-modal-close");
  var cache = {};

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function setCopyLabel(label) {
    copyBtn.innerHTML = '<i class="fas fa-copy" aria-hidden="true"></i> ' + label;
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    setCopyLabel("Copy");
    copyBtn.classList.remove("copied");
  }

  function showContent(text) {
    contentEl.textContent = text;
    openModal();
  }

  function showError(message) {
    contentEl.textContent = message;
    openModal();
  }

  document.querySelectorAll(".bibtex-btn").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      var url = btn.getAttribute("data-bibtex-url") || btn.getAttribute("href");
      if (!url) return;

      if (cache[url]) {
        showContent(cache[url]);
        return;
      }

      contentEl.textContent = "Loading...";
      openModal();

      fetch(url)
        .then(function (response) {
          if (!response.ok) throw new Error("Failed to load BibTeX");
          return response.text();
        })
        .then(function (text) {
          cache[url] = text.trim();
          showContent(cache[url]);
        })
        .catch(function () {
          showError("Unable to load BibTeX. Please try again.");
        });
    });
  });

  copyBtn.addEventListener("click", function () {
    var text = contentEl.textContent || "";
    if (!text || text === "Loading..." || text.indexOf("Unable to load") === 0) return;

    function onCopied() {
      setCopyLabel("Copied!");
      copyBtn.classList.add("copied");
      setTimeout(function () {
        setCopyLabel("Copy");
        copyBtn.classList.remove("copied");
      }, 1500);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onCopied).catch(function () {
        fallbackCopy(text, onCopied);
      });
    } else {
      fallbackCopy(text, onCopied);
    }
  });

  function fallbackCopy(text, onSuccess) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      onSuccess();
    } catch (e) {
      /* ignore */
    }
    document.body.removeChild(textarea);
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
})();
