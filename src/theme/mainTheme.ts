import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        font: {
          primary: { value: "#1C1C1C" },
          secondary: { value: "#B0B0B0" },
          white: { value: "#F1F1F1" },
          placeholder: { value: "#ABABAB" },
          green: { value: "#0E7411" },
          red: { value: "#B93C3C" },
        },
        bg: {
          primary: { value: "#F1F1F1" },
          black: { value: "#1C1C1C" },
          white: { value: "#FFFFFF" },
          red: { value: "#B93C3C" },
        },
        statusBg: {
          new: { value: "#F0CDFA" },
          atWork: { value: "#FFEBB3" },
          atWorkMobile: { value: "#FFFEB3" },
          done: { value: "#A2E3A4" },
          closed: { value: "#F1F1F1" },
        },
        borderColor: {
          primary: { value: "#D9E1EC" },
          select: { value: "#B0B0B0" }
        }
      },
      spacing: {
        buttonsPadding: {
          small: { value: "8px 10px" },
          medium: { value: "8px 15px" },
          large: { value: "8px 17px" },
          huge: { value: "8px 20px" },
        }
      }
    },
  }
})

export const mainTheme = createSystem(defaultConfig, config)