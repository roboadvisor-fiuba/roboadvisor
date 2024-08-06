import bbva from "assets/images//activos/bbva.jpg";
import edn from "assets/images//activos/edn.jpg";
import ypf from "assets/images//activos/YPFD.jpg";
import ggal from "assets/images//activos/GGAL.jpg";
import loma from "assets/images//activos/LOMA.jpg";
import pamp from "assets/images//activos/PAMP.jpg";
import celu from "assets/images//activos/CELU.jpg";
import carc from "assets/images//activos/CARC.jpg";
import mori from "assets/images//activos/MORI.jpg";
import come from "assets/images//activos/COME.jpg";
import mola from "assets/images//activos/MOLI.jpg";
import ctio from "assets/images//activos/CTIO.jpg";
import defa from "assets/images//activos/default.jpg";

export const ASSETS = {
  GGAL: {
    image: ggal,
    longName: "Banco Galicia",
    shortName: "GGAL.BA",
  },
  EDN: {
    image: edn,
    longName: "Edenor",
    shortName: "EDN.BA",
  },
  YPFD: {
    image: ypf,
    longName: "YPF",
    shortName: "YPFD.BA",
  },
  LOMA: {
    image: loma,
    longName: "Loma Negra",
    shortName: "LOMA.BA",
  },
  PAMP: {
    image: pamp,
    longName: "Pampa Energía",
    shortName: "PAMP.BA",
  },
  BBAR: {
    image: bbva,
    longName: "BBVA",
    shortName: "BBAR.BA",
  },
  CELU: {
    image: celu,
    longName: "Celulosa Argentina",
    shortName: "CELU.BA",
  },
  CARC: {
    image: carc,
    longName: "Carboclor",
    shortName: "CARC.BA",
  },
  MORI: {
    image: mori,
    longName: "Morixe Hermanos",
    shortName: "MORI.BA",
  },
  COME: {
    image: come,
    longName: "Sociedad Comercial del Plata SA",
    shortName: "COME.BA",
  },
  MOLA: {
    image: mola,
    longName: "Molinos Agro",
    shortName: "MOLA.BA",
  },
  CTIO: {
    image: ctio,
    longName: "Consultatio",
    shortName: "CTIO.BA",
  },
};

export const getAssetByShortName = (shortName) => {
  const asset = Object.values(ASSETS).find((asset) => asset.shortName === shortName);
  return (
    asset || {
      image: defa,
      longName: shortName,
      shortName: shortName,
    }
  );
};
