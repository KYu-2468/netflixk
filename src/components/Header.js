import React, { useState, useEffect } from "react";
import { HeaderContainer } from "./Header.styles";

function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } else setIsDark(false);
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <HeaderContainer dar={isDark}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </HeaderContainer>
  );
}

export default Header;
