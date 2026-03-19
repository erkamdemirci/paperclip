import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("tr") ? "tr" : "en";
  const nextLang = LANGUAGES.find((l) => l.code !== currentLang) ?? LANGUAGES[0];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground shrink-0"
          onClick={() => i18n.changeLanguage(nextLang.code)}
          aria-label={`Switch to ${nextLang.label}`}
        >
          <Languages className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{nextLang.flag} {nextLang.label}</TooltipContent>
    </Tooltip>
  );
}
