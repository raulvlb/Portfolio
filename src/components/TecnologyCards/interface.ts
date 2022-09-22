import { ReactComponentElement, ReactElement } from "react";
import { IconType } from "react-icons/lib";

export interface tecnologiasProp {
    id: number; label: string; icon: React.ReactNode;
}

export interface tecnologiasProps extends Array<tecnologiasProps>{}
