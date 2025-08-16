import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type Lang = "fr" | "en" | "de";

export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation();
    const [lang, setLang] = useState<Lang>((i18n.language?.substring(0, 2) as Lang) || "fr");

    useEffect(() => {
        const syncLang = (l: string) => setLang((l.substring(0, 2) as Lang) || "fr");
        i18n.on("languageChanged", syncLang);

        return () => i18n.off("languageChanged", syncLang);
    }, [i18n]);

    const changeLanguage = async (l: Lang) => {
        console.log("Attempting to change language...");
        console.log("Available languages:", i18n.languages);
        console.log("previous language:", lang);
        console.log("Changing language to:", l);
        console.log("Current language:", i18n.language);
        if (l === lang) return;
        await i18n.changeLanguage(l);
        setLang(l);
    };

    const baseBtn =
        "px-2 py-1 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400";

    return (
        <div
            className="flex items-center gap-2"
            aria-label={t("navbar.aria.languageSwitcher", "Language switcher")}
        >
            {(["fr", "en", "de"] as Lang[]).map((l, idx) => (
                <div key={l} className="flex items-center">
                    <button
                        onClick={() => changeLanguage(l)}
                        className={`${baseBtn} ${
                            lang === l
                                ? "bg-white/20 text-white"
                                : "text-white/80 hover:text-white"
                        }`}
                        aria-pressed={lang === l}
                    >
                        {l.toUpperCase()}
                    </button>
                    {idx < 2 && <span className="text-white/40 select-none">|</span>}
                </div>
            ))}
        </div>
    );
}
