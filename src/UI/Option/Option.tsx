export interface IPropsOption {
	value: string
}

const Option = (props: IPropsOption) => {
	return <option value={props.value}>{props.value}</option>
}

export default Option
