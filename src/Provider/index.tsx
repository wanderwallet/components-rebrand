import { PropsWithChildren, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { ToastData, ToastDataWithID, ToastsContext } from "../Toast/utils";
import { nanoid } from "nanoid";
import { Toasts } from "../Toasts";

export type DisplayTheme = "dark" | "light";

export type ArconnectTheme = DefaultTheme;

export const ARCONNECT_LIGHT_THEME: ArconnectTheme = {
  displayTheme: "light",
  theme: "#6B57F9",
  primaryText: "#121212",
  secondaryText: "#666",
  tertiaryText: "#838383",
  cardBorder: "235, 235, 241",
  background: "255, 255, 255",
  cardBackground: "#FFF",
  // New styles:
  backgroundv2: "#FFFFFF",
  primary: "#6B57F9",
  primaryBtnHover: "#5647A0",
  secondaryBtnHover: "#DDD9F4",
  secondaryItemHover: "#EBE8F8",
  buttonDisabled: "#BCB3E9",
  primaryTextv2: "#191919",
  secondaryTextv2: "#757575",
  buttonDisabledText: "#DDD9F4",
  inputField: "#757575",
  success: "#17A815",
  fail: "#D22B1F",
  backgroundSecondary: "#CCCCCC",
  delete: "#F58080",
  secondaryDelete: "#F58080",
  surfaceDefault: "#FFF",
  surfaceSecondary: "#F2F2F7",
  surfaceTertiary: "#f2f2f7",
  borderDefault: "#D6D6DD",
  borderSecondary: "#E4E4EB",
  button: {
    background: {
      primary: {
        default: "linear-gradient(47deg, #5842f8 5.41%, #6b57f9 96%)",
        hover: "#503ece",
        active: "#503ece",
        disabled: "#f5f4ff"
      },
      secondary: {
        default: "#F2F2F7",
        hover: "#EBEBF0",
        active: "#F2F2F7",
        disabled: "#F2F2F7"
      },
      secondaryAlt: {
        default: "#F5F4FF",
        hover: "#E3E1FA",
        active: "#F5F4FF",
        disabled: "#F5F4FF"
      }
    },
    text: {
      primary: "#fff",
      secondary: "#291C8B",
      secondaryAlt: "#291C8B",
      disabled: "#847eaf"
    },
    hoverBorder: {
      primary: "none",
      secondary: "1.5px solid #EBEBF0",
      secondaryAlt: "none"
    }
  },
  input: {
    background: {
      search: { default: "#f2f2f7", disabled: "#FFF", special: "#F2F2F7" },
      default: { default: "#f2f2f7", disabled: "#FFF" },
      dropdown: { default: "#FFF", disabled: "#FFF" }
    },
    border: {
      search: { disabled: "#E4E4EB", focused: "#D6D6DD", special: "#6B57F9" },
      default: { disabled: "#E4E4EB", focused: "#D6D6DD" },
      dropdown: { default: "#E4E4EB", disabled: "#E4E4EB", focused: "#D6D6DD" }
    },
    placeholder: {
      search: "#666666",
      default: "#666666",
      dropdown: "#121212"
    },
    icons: {
      searchActive: "#6B57F9",
      searchInactive: "#838383"
    }
  },
  listItem: {
    hover: "#F2F2F7",
    active: "#EBEBF0",
    icon: "#838383"
  }
};

export const ARCONNECT_DARK_THEME: ArconnectTheme = {
  displayTheme: "dark",
  theme: "#6B57F9",
  primaryText: "#EEE",
  secondaryText: "#AAA",
  tertiaryText: "#838383",
  cardBorder: "44, 44, 47",
  background: "18, 18, 18",
  cardBackground: "#121212",
  // New styles:
  backgroundv2: "#121212",
  primary: "#6B57F9",
  primaryBtnHover: "#6751D0",
  secondaryBtnHover: "#36324D",
  secondaryItemHover: "#2B2838",
  buttonDisabled: "#544A81",
  primaryTextv2: "#FFFFFF",
  secondaryTextv2: "#A3A3A3",
  buttonDisabledText: "#A9A4C0",
  inputField: "#847F90",
  success: "#56C980",
  fail: "#FF1A1A",
  backgroundSecondary: "#333333",
  delete: "#8C1A1A",
  secondaryDelete: "#C51A1A",
  surfaceDefault: "#121212",
  surfaceSecondary: "#242426",
  surfaceTertiary: "#2C2C2E",
  borderDefault: "#333",
  borderSecondary: "#2C2C2E",
  button: {
    background: {
      primary: {
        default: "linear-gradient(47deg, #5842F8 5.41%, #6B57F9 96%)",
        hover: "#503ece",
        active: "#503ece",
        disabled: "#2B2269"
      },
      secondary: {
        default: "#333336",
        hover: "#2C2C2E",
        active: "#333336",
        disabled: "#333336"
      },
      secondaryAlt: {
        default: "#403785",
        hover: "#2A2260",
        active: "#403785",
        disabled: "#403785"
      }
    },
    text: {
      primary: "#fff",
      secondary: "#EEE",
      secondaryAlt: "#EEE",
      disabled: "#8E8D97"
    },
    hoverBorder: {
      primary: "none",
      secondary: "1.5px solid #2C2C2E",
      secondaryAlt: "none"
    }
  },
  input: {
    background: {
      search: { default: "#2C2C2E", disabled: "#2C2C2E", special: "#2C2C2E" },
      default: { default: "#2C2C2E", disabled: "#2C2C2E" },
      dropdown: { default: "#242426", disabled: "#2C2C2E" }
    },
    border: {
      search: { disabled: "#2C2C2E", focused: "#333", special: "#6B57F9" },
      default: { disabled: "#2C2C2E", focused: "#333" },
      dropdown: { default: "#2C2C2E", disabled: "#2C2C2E", focused: "#333" }
    },
    placeholder: {
      search: "#AAAAAA",
      default: "#AAAAAA",
      dropdown: "#EEEEEE"
    },
    icons: {
      searchActive: "#9787FF",
      searchInactive: "#838383"
    }
  },
  listItem: {
    hover: "#242426",
    active: "#2C2C2E",
    icon: "#838383"
  }
};

export function Provider<T extends ArconnectTheme = ArconnectTheme>({
  children,
  theme
}: PropsWithChildren<{ theme: T }>) {
  const [toasts, setToasts] = useState<ToastDataWithID[]>([]);

  function setToast(toast: ToastData) {
    const id = nanoid();

    setToasts((val) => [
      ...val,
      { ...toast, id, addedAt: new Date().getTime() }
    ]);

    setTimeout(
      () => setToasts((val) => val.filter((t) => t.id !== id)),
      toast.duration
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastsContext.Provider value={{ toasts, setToast }}>
        <Toasts setToasts={setToasts} />
        {children}
      </ToastsContext.Provider>
    </ThemeProvider>
  );
}
