import { IButton } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export function Button({ appearance, arrow = 'none', children, className, ...props }: IButton): JSX.Element {
	return <>
		<button className={cn(styles.button, className, {
			[styles.primary]: appearance === 'primary',
			[styles.secondary]: appearance === 'secondary'
		})}>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.right]: arrow === 'right',
				[styles.down]: arrow === 'down',
			})}
			{...props}
			>
				v
				</span>}
		</button>
	</>
}