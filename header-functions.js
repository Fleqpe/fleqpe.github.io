function dropdownPopulate() {
  const privacyDropdown = document.getElementById("privacy-dropdown");
  const termsDropdown = document.getElementById("terms-dropdown");
  const privacyDropdownContainer = document.querySelector(
    ".dropdown:nth-of-type(1)"
  );
  const termsDropdownContainer = document.querySelector(
    ".dropdown:nth-of-type(2)"
  );

  if (
    !privacyDropdown ||
    !termsDropdown ||
    !privacyDropdownContainer ||
    !termsDropdownContainer
  ) {
    console.error("Dropdown elements not found.");
    return;
  }

  // Clear existing dropdown items
  privacyDropdown.innerHTML = "";
  termsDropdown.innerHTML = "";

  // Check if there are Google Play games
  const hasGooglePlayGame = games.some((game) =>
    game.urls.some((url) => url.type === "googlePlay" && url.link)
  );

  if (!hasGooglePlayGame) {
    // Hide dropdown containers if no Google Play games
    privacyDropdownContainer.style.display = "none";
    termsDropdownContainer.style.display = "none";
    return; // No need to populate dropdowns
  }

  // Show dropdown containers
  privacyDropdownContainer.style.display = "block";
  termsDropdownContainer.style.display = "block";

  // Populate dropdowns
  games.forEach((game) => {
    const googlePlayUrl = game.urls.find(
      (url) => url.type === "googlePlay"
    )?.link;

    if (!googlePlayUrl) return;

    const privacyLink = document.createElement("a");
    privacyLink.href = `privacy-policy.html?game=${encodeURIComponent(
      game.title
    )}`;
    privacyLink.innerHTML = game.title;
    privacyDropdown.appendChild(privacyLink);

    const termsLink = document.createElement("a");
    termsLink.href = `terms-conditions.html?game=${encodeURIComponent(
      game.title
    )}`;
    termsLink.innerHTML = game.title;
    termsDropdown.appendChild(termsLink);
  });

  console.log("Dropdowns populated.");
}

function setToggleButton() {
  const themeToggleButton = document.getElementById("theme-toggle");

  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
  } else {
    console.error("Theme toggle button not found.");
  }

  // Load the saved theme from localStorage when the page loads
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    // Default to light mode if no theme is saved
    document.body.classList.add("light-mode");
  }
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    themeIcon.classList.remove("fa-moon"); // Remove moon icon
    themeIcon.classList.add("fa-sun"); // Add sun icon

    // Save the light mode in localStorage
    localStorage.setItem("theme", "light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-sun"); // Remove sun icon
    themeIcon.classList.add("fa-moon"); // Add moon icon

    // Save the dark mode in localStorage
    localStorage.setItem("theme", "dark-mode");
  }
}

// Function to update the theme icon based on the theme
function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("theme-icon");

  if (theme === "dark-mode") {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
}
