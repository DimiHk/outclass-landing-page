import { useRouter } from "next/router";
import en from "../locales/en/en.json";
import es from "../locales/es/es.json";
import pt from "../locales/pt/pt.json";

const useLocal = () => {
  const router = useRouter();
  const { locale } = router;
  const translations = locale === "en" ? en : locale === "pt" ? pt : es;
  return { locale, translations };
};

export default useLocal;
