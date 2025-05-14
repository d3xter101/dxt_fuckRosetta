const currentVersion = "1.2.0";

fetch("/api/version")
  .then((res) => res.json())
  .then((data) => {
    if (data.version !== currentVersion) {
      alert(`🚨 Mise à jour disponible : version ${data.version}. 
  https://github.com/d3xter101`);
    }
  })
  .catch((err) => {
    console.error("Erreur lors du contrôle de version:", err);
  });
