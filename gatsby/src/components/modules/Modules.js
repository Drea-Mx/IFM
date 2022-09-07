import React from "react";
import styled from "styled-components";
import Archivo from "./Archivo";
import Codigo from "./Codigo";
import Galeria from "./Galeria";
import ImagenTexto from "./ImagenTexto";
import ImageType from "./ImageType";
import PaginasObject from "./PaginasObject";
import SliderObject from "./SliderObject";
import Texto from "./Texto";

const modulesArr = [
  { name: "codigo", comp: Codigo },
  { name: "archivo", comp: Archivo },
  { name: "galeria", comp: Galeria },
  { name: "imageType", comp: ImageType },
  { name: "imagenTexto", comp: ImagenTexto },
  { name: "paginasObject", comp: PaginasObject },
  { name: "sliderObject", comp: SliderObject },
  { name: "texto", comp: Texto },
];

const Modules = ({ moduleArray, props }) => {
  let final_arr = [];

  moduleArray.forEach((edMod) => {
    modulesArr.forEach((mMod) => {
      if (edMod["_type"] === mMod.name) {
        final_arr.push({ ...edMod, ...mMod });
      }
    });
  });

  return (
    <ModulesWrapper>
      {final_arr.map((Module, i) => (
        <Module.comp key={i} data={{ ...Module }} props={props} />
      ))}
    </ModulesWrapper>
  );
};

const ModulesWrapper = styled.div``;

export default Modules;