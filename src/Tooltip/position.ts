import { PlacesType } from "react-tooltip";

export type Position =
  | "top"
  | "topStart"
  | "topEnd"
  | "left"
  | "bottom"
  | "bottomStart"
  | "bottomEnd"
  | "right"
  | "leftStart"
  | "leftEnd"
  | "rightStart"
  | "rightEnd";

const mapping: Record<Position, PlacesType> = {
  top: "top",
  topStart: "top-start",
  topEnd: "top-end",
  bottom: "bottom",
  bottomStart: "bottom-start",
  bottomEnd: "bottom-end",
  left: "left",
  right: "right",
  leftStart: "left-start",
  leftEnd: "left-end",
  rightStart: "right-start",
  rightEnd: "right-end"
};

export function getPlace(position: Position): PlacesType {
  return mapping[position];
}
