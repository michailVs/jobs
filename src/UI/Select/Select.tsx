import classes from './select.module.css'
import type { ChangeEvent } from 'react'
import Option from '../Option/Option'

interface IProps {
	name?: string
	options: string[]
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select = (props: IProps) => {
	return (
		<select
			onChange={props.onChange}
			name={props.name ? props.name : 'select'}
			className={classes.select}
		>
			{props.options.map((el, i) => (
				<Option key={i} value={el} />
			))}
		</select>
	)
}

export default Select
