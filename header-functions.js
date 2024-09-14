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
    privacyLink.innerHTML = `${game.title}`;
    privacyDropdown.appendChild(privacyLink);

    const termsLink = document.createElement("a");
    termsLink.href = `terms-conditions.html?game=${encodeURIComponent(
      game.title
    )}`;
    termsLink.innerHTML = `${game.title}`;
    termsDropdown.appendChild(termsLink);
  });

  console.log("Dropdowns populated.");
}
