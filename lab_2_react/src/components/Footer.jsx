import { useState, useEffect } from "react";

function Footer() {
  // Стан для збереження системної інформації
  const [systemInfo, setSystemInfo] = useState({ userAgent: "", platform: "" });

  useEffect(() => {
    // Зчитуємо інформацію про систему
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };

    // Зберігаємо в localStorage
    localStorage.setItem("systemInfo", JSON.stringify(info));

    // Встановлюємо у стан
    setSystemInfo(info);
  }, []); // Порожній масив залежностей = виконується один раз при монтуванні

  return (
    <footer style={{ color: "#e2e8f0", textAlign: "center", marginTop: "20px" }}>
      <p>© 2026 Павло</p>
      <p>User Agent: {systemInfo.userAgent}</p>
      <p>Platform: {systemInfo.platform}</p>
    </footer>
  );
}

export default Footer;