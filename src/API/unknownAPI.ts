import type { ICV } from "../Types/Api.type"

export async function getCV(): Promise<ICV[]> {
    // const req = await fetch('APIUrl')
    // const data = await req.json()
    // return data
    return [
        {
            "id": 1,
            "title": "Junior Frontend Developer",
            "salary": "до 80 000 ₽",
            "location": "Ярославль / Удалённо",
            "experience": "1-3 года"
        },
        {
            "id": 2,
            "title": "Middle React Developer",
            "salary": "от 120 000 ₽",
            "location": "Москва",
            "experience": "3-5 лет"
        }
    ]
}