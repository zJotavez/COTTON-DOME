import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, ChevronUp } from "lucide-react";

interface LanguageSelectorProps {
  currentLang: "pt" | "en" | "fr";
  onLangChange: (lang: "pt" | "en" | "fr") => void;
}

export function LanguageSelector({ currentLang, onLangChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "pt", flag: "🇵🇹", label: "Português PT" },
    { code: "en", flag: "🇬🇧", label: "English" },
    { code: "fr", flag: "🇫🇷", label: "Français" }
  ] as const;

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLang = languages.find((lang) => lang.code === currentLang) || languages[0];

  return (
    <div ref={containerRef} className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alterar Idioma / Change Language"
          className="flex items-center gap-2 px-3 py-3 rounded-full bg-[#111111]/90 border border-white/10 hover:border-[#E2AF55] text-white hover:text-[#E2AF55] shadow-lg shadow-black/60 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <span className="text-base leading-none">{activeLang.flag}</span>
          <span className="text-[10px] font-mono tracking-wider font-bold uppercase hidden sm:inline-block">
            {activeLang.code}
          </span>
          <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 left-0 w-44 rounded-xl bg-[#111111] border border-white/10 shadow-2xl p-1.5 flex flex-col gap-1 z-50 backdrop-blur-md"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLangChange(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-3 py-2 w-full text-left rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    currentLang === lang.code
                      ? "bg-[#E2AF55]/10 text-[#E2AF55]"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
