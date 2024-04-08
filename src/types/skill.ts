import { FC } from "react";

export interface Skill {
  name: string;
  Icon: FC<{ color: string; size: number }>;
  dabbled?: boolean;
}

export interface MainSkill {
  name: string;
  level: number;
}
