import type { Note } from "./types";

export const Api = {
    notes: {
      list: ():Note[] => [
        {
          id: "nota",
          title: "Primera Nota",
          lastEdited: new Date().toLocaleDateString(),
          archived: false,
          content: "algun contenido",
        },
        {
          id: "nota2",
          title: "Segunda nota",
          lastEdited: new Date().toLocaleDateString(),
          archived: false,
          content: "algun contenido",
        },
      ],
    },
  };

