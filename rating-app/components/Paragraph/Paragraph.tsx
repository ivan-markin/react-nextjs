import { IParagraph } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from 'classnames';

export function Paragraph({ size = 'm', className, children, ...props }: IParagraph): JSX.Element {
	return <>
		<p className={cn({
			[styles.s]: size === 's',
			[styles.m]: size === 'm',
			[styles.l]: size === 'l'
		})}
		{...props}
		>			
			{children}
			</p>
	</>
}