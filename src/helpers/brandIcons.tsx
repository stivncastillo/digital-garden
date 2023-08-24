import {
  BiLogoVuejs,
  BiLogoFigma,
  BiLogoSketch,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoPhp,
  BiLogoSass,
} from "react-icons/bi";
import { SiAstro, SiLaravel } from "react-icons/si";

export const BRAND_ICONS = {
  vuejs: (props: any) => <BiLogoVuejs {...props} />,
  figma: (props: any) => <BiLogoFigma {...props} />,
  sketch: (props: any) => <BiLogoSketch {...props} />,
  "react-native": (props: any) => <BiLogoReact {...props} />,
  react: (props: any) => <BiLogoReact {...props} />,
  nodejs: (props: any) => <BiLogoNodejs {...props} />,
  astro: (props: any) => <SiAstro {...props} />,
  tailwindcss: (props: any) => <BiLogoTailwindCss {...props} />,
  laravel: (props: any) => <SiLaravel {...props} />,
  php: (props: any) => <BiLogoPhp {...props} />,
  sass: (props: any) => <BiLogoSass {...props} />,
};
