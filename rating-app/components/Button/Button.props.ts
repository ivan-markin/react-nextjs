import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'secondary';
	children: ReactNode;
	arrow?: 'right' | 'down' | 'none';
}