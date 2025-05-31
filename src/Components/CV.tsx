import { useEffect, useState, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, filtered } from '../store/cv/cv'
import type { ICV } from '../Types/Api.type'
import { getCV } from '../API/unknownAPI'
import Select from '../UI/Select/Select'

const CV = () => {
	const { cv }: { cv: ICV[] } = useSelector(state => state.cv)
	const dispatch = useDispatch()
	const filter = ['Любой', '1-3 года', '3-5 лет', '5+ лет']
	const [isLoading, setLoading] = useState(true)

	const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === 'Любой') {
			getCV().then(data => dispatch(add(data)))
		} else {
			dispatch(filtered(e.target.value))
		}
	}

	useEffect(() => {
		if (cv) {
			getCV().then(data => dispatch(add(data)))
			setLoading(false)
		}
	}, [])
	return (
		<section className='container'>
			<Select onChange={selectHandler} options={filter} />
			<section className='cv'>
				{!isLoading && cv ? (
					cv.map(el => (
						<section key={el.id}>
							<h2 className='title'>{el.title}</h2>
							<p className='salary'>Зарплата: {el.salary}</p>
							<p>
								{el.location} | Опыт: {el.experience}
							</p>
						</section>
					))
				) : (
					<div>Loading</div>
				)}
			</section>
		</section>
	)
}

export default CV
