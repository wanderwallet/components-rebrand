export type Position =
  | "top"
  | "topStart"
  | "topEnd"
  | "left"
  | "bottom"
  | "bottomStart"
  | "bottomEnd"
  | "right";

export interface PopoverPosition {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  transform?: string;
}

export function getPosition(position: Position): PopoverPosition {
  const positions: Record<Position, PopoverPosition> = {
    top: {
      bottom: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    topStart: {
      bottom: "133%",
      left: "-37%"
    },
    topEnd: {
      bottom: "133%",
      right: "-37%"
    },
    bottom: {
      top: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    bottomStart: {
      top: "133%",
      left: "-37%"
    },
    bottomEnd: {
      top: "133%",
      right: "-37%"
    },
    left: {
      top: "50%",
      right: "125%",
      transform: "translate(0, -50%)"
    },
    right: {
      top: "50%",
      left: "125%",
      transform: "translate(0, -50%)"
    }
  };

  return positions[position];
}
