let targetUrl = "";

function showLinkPopup(url, title, message) {
  targetUrl = url;
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupMessage").textContent = message;
  document.getElementById("linkPopup").style.display = "flex";
}

function showStatsPopup(type) {
  const statsData = {
    photos: {
      title: "📷 Koleksioni i Fotove",
      images: [
        "https://via.placeholder.com/150x150/ff6b9d/ffffff?text=Foto+1",
        "https://via.placeholder.com/150x150/c44569/ffffff?text=Foto+2"
      ],
      unlockUrl: "https://example.com/unlock-photos"
    },
    videos: {
      title: "🎥 Koleksioni i Videove",
      images: [
        "https://via.placeholder.com/150x150/636e72/ffffff?text=Video+1",
        "https://via.placeholder.com/150x150/2d3436/ffffff?text=Video+2"
      ],
      unlockUrl: "https://example.com/unlock-videos"
    }
  };

  const data = statsData[type];
  document.getElementById("statsTitle").textContent = data.title;
  const statsGrid = document.getElementById("statsGrid");
  statsGrid.innerHTML = "";

  data.images.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.onclick = () => {
      const itemType = type === "photos" ? "Foto" : "Video";
      showLinkPopup(
        `https://example.com/${type}/${index + 1}`,
        `${itemType} ${index + 1}`,
        "Ky link ju drejton në versionin e plotë. A doni të vazhdoni?"
      );
    };
    statsGrid.appendChild(img);
  });

  document.getElementById("statsPopup").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  // Link popup
  document.getElementById("cancelBtn").onclick = () => {
    document.getElementById("linkPopup").style.display = "none";
    targetUrl = "";
  };
  document.getElementById("popupClose").onclick = () => {
    document.getElementById("linkPopup").style.display = "none";
    targetUrl = "";
  };
  document.getElementById("confirmBtn").onclick = () => {
    if (targetUrl) {
      window.open(targetUrl, "_blank");
      document.getElementById("linkPopup").style.display = "none";
      targetUrl = "";
    }
  };

  // Stats popup
  document.getElementById("closeStatsBtn").onclick = () => {
    document.getElementById("statsPopup").style.display = "none";
  };
  document.getElementById("closeStatsIcon").onclick = () => {
    document.getElementById("statsPopup").style.display = "none";
  };

  // Profile popup
  document.querySelector(".avatar").onclick = () => {
    document.getElementById("profilePopup").style.display = "flex";
  };
  document.getElementById("closeProfilePopup").onclick = () => {
    document.getElementById("profilePopup").style.display = "none";
  };

  // Buttons
  document.getElementById("explicitBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/explicit",
      "🔞 Përmbajtje Eksplicite",
      "Ky link përmban përmbajtje eksplicite. Vazhdoni?"
    );
  };
  document.getElementById("livestreamBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/livestream",
      "👁️ Livestream +18",
      "Ky link ju drejton në një livestream. Vazhdoni?"
    );
  };
  document.getElementById("unlockBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/unlock",
      "🔓 Shkyç të Gjitha",
      "Ky link do t'ju çojë në faqe pagese. Vazhdoni?"
    );
  };
  document.getElementById("bannerAd").onclick = () => {
    showLinkPopup(
      "https://example.com/banner",
      "📢 Reklamë Banner",
      "Ky link ju çon në një faqe partneri. Vazhdoni?"
    );
  };
  document.getElementById("bannerAdImage").onclick = () => {
    showLinkPopup(
      "https://example.com/banner-image",
      "📢 Reklamë",
      "Ky link ju çon në një ofertë speciale. Vazhdoni?"
    );
  };

  // Stats buttons
  document.getElementById("photoStats").onclick = () => {
    showStatsPopup("photos");
  };
  document.getElementById("videoStats").onclick = () => {
    showStatsPopup("videos");
  };
});
