import React from "react";
import "./language.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Language = () => {
  const router = useRouter();

  const changeLanguage = (lang) => {
    // router.push(`/${lang}`);
  };

  return (
    <div className="container">
      <button className="container-button" onClick={() => changeLanguage("uz")}>
        <Image src="/flags/uz.svg" alt="Uzbek" width={20} height={14} />
        <span className="container-text">UZ</span>
      </button>

      <button className="container-button" onClick={() => changeLanguage("en")}>
        <Image src="/flags/en.svg" alt="English" width={20} height={14} />
        <span className="container-text">EN</span>
      </button>

      <button className="container-button" onClick={() => changeLanguage("ru")}>
        <Image src="/flags/ru.svg" alt="Russian" width={20} height={14} />
        <span className="container-text">RU</span>
      </button>
    </div>
  );
};

export default Language;
