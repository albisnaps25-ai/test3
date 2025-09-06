let targetUrl = ""; // Store which link to open

function showLinkPopup(url, title, message) {
  targetUrl = url;
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupMessage").textContent = message;
  document.getElementById("linkPopup").style.display = "flex";
}

function showProfilePopup() {
  document.getElementById("profilePopup").style.display = "flex";
}

function showStatsPopup(type) {
  const statsData = {
    photos: {
      title: "📷 Koleksioni i Fotove",
      images: [
        "https://via.placeholder.com/150x150/ff6b9d/ffffff?text=Foto+1",
        "https://via.placeholder.com/150x150/c44569/ffffff?text=Foto+2", 
        "https://via.placeholder.com/150x150/f8b500/ffffff?text=Foto+3"
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
  
  // Create images
  data.images.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `${type} ${index + 1}`;
    img.onclick = () => {
      const itemType = type === 'photos' ? 'Foto' : 'Video';
      showLinkPopup(
        `https://example.com/${type}/${index + 1}`,
        `📱 ${itemType} ${index + 1}`,
        `Ky link ju drejton në versionin e plotë të kësaj ${itemType.toLowerCase()}je. A doni të vazhdoni?`
      );
    };
    statsGrid.appendChild(img);
  });
  
  // Create unlock button
  const unlockBtn = document.createElement("button");
  unlockBtn.className = "popup-unlock-btn";
  unlockBtn.textContent = type === 'photos' ? '🔓 Shkyç Fotot' : '🔓 Shkyç Videot';
  unlockBtn.onclick = () => {
    const itemType = type === 'photos' ? 'fotot' : 'videot';
    showLinkPopup(
      data.unlockUrl,
      `🔓 Shkyç të gjitha ${itemType}`,
      `Ky link do t'ju drejtojë në faqen e pagesës për të shkyçur të gjitha ${itemType}. A doni të vazhdoni?`
    );
  };
  statsGrid.appendChild(unlockBtn);
  
  document.getElementById("statsPopup").style.display = "flex";
}

document.addEventListener('DOMContentLoaded', function() {
  // Profile picture and banner area clicks
  document.getElementById("profilePicture").onclick = showProfilePopup;
  document.getElementById("bannerArea").onclick = showProfilePopup;

  // Close profile popup
  document.getElementById("closeProfileIcon").onclick = () => {
    document.getElementById("profilePopup").style.display = "none";
  };

  // Profile popup banner and button actions
  document.getElementById("profilePopupBanner").onclick = () => {
    showLinkPopup(
      "https://example.com/special-offer",
      "🎯 Oferta Speciale",
      "Ky link ju drejton në një ofertë të veçantë me 50% zbritje. A doni të vazhdoni?"
    );
    document.getElementById("profilePopup").style.display = "none";
  };

  document.getElementById("profileActionBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/premium-access",
      "🎯 Aksesi Premium",
      "Ky link ju drejton në faqen e regjistrimit për akses të plotë. A doni të vazhdoni?"
    );
    document.getElementById("profilePopup").style.display = "none";
  };

  // Close link popup
  document.getElementById("cancelBtn").onclick = () => {
    document.getElementById("linkPopup").style.display = "none";
    targetUrl = "";
  };

  document.getElementById("popupClose").onclick = () => {
    document.getElementById("linkPopup").style.display = "none";
    targetUrl = "";
  };
  
  // Confirm and go to link
  document.getElementById("confirmBtn").onclick = () => {
    if (targetUrl) {
      window.open(targetUrl, '_blank');
      document.getElementById("linkPopup").style.display = "none";
      targetUrl = "";
    }
  };
  
  // Close stats popup
  document.getElementById("closeStatsBtn").onclick = () => {
    document.getElementById("statsPopup").style.display = "none";
  };
  document.getElementById("closeStatsIcon").onclick = () => {
    document.getElementById("statsPopup").style.display = "none";
  };
  
  // Close popups when clicking overlay
  document.getElementById("linkPopup").onclick = (e) => {
    if (e.target.id === "linkPopup") {
      document.getElementById("linkPopup").style.display = "none";
      targetUrl = "";
    }
  };
  
  document.getElementById("statsPopup").onclick = (e) => {
    if (e.target.id === "statsPopup") {
      document.getElementById("statsPopup").style.display = "none";
    }
  };

  document.getElementById("profilePopup").onclick = (e) => {
    if (e.target.id === "profilePopup") {
      document.getElementById("profilePopup").style.display = "none";
    }
  };

  document.getElementById("buttonPopup").onclick = (e) => {
    if (e.target.id === "buttonPopup") {
      document.getElementById("buttonPopup").style.display = "none";
    }
  };
  
  // Assign actions to existing elements
  document.getElementById("explicitBtn").onclick = () => {
    showLinkPopup("https://example.com/explicit","🔞 Përmbajtje Eksplicite","Ky link përmban përmbajtje eksplicite për të rritur. A jeni të sigurt që doni të vazhdoni?");
  };
  
  document.getElementById("livestreamBtn").onclick = () => {
    showLinkPopup("https://example.com/livestream","👁️ Livestream +18","Ky link ju drejton në një livestream për të rritur. A doni të vazhdoni?");
  };
  
  document.getElementById("unlockBtn").onclick = () => {
    showLinkPopup("https://example.com/unlock","🔓 Shkyç të Gjitha","Ky link do t'ju drejtojë në faqen e pagesës për të shkyçur të gjitha fotot. A doni të vazhdoni?");
  };
  
  document.getElementById("bannerAdImage").onclick = () => {
    showLinkPopup("https://example.com/banner-image","📢 Reklamë","Ky link ju drejton në një ofertë speciale. A doni të vazhdoni?");
  };
  
  // Photos
  document.getElementById("photo1").onclick = () => {
    showLinkPopup("https://example.com/photo1","📷 Foto 1","Ky link ju drejton në versionin e plotë të kësaj fotoje. A doni të vazhdoni?");
  };
  document.getElementById("photo2").onclick = () => {
    showLinkPopup("https://example.com/photo2","📷 Foto 2","Ky link ju drejton në versionin e plotë të kësaj fotoje. A doni të vazhdoni?");
  };
  document.getElementById("photo3").onclick = () => {
    showLinkPopup("https://example.com/photo3","📷 Foto 3","Ky link ju drejton në versionin e plotë të kësaj fotoje. A doni të vazhdoni?");
  };
  
  // Stats
  document.getElementById("photoStats").onclick = () => { showStatsPopup("photos"); };
  document.getElementById("videoStats").onclick = () => { showStatsPopup("videos"); };
});
