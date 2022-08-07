import axios from "axios"
import React, { ReactFragment, useState } from "react"
import { IProduct } from "../models"
import { ErrorMessage } from "./ErrorMessage"

const productData: IProduct = {
    title: '',
    price: 1.3,
    description: 'Lorem ipsum',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }

}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProuct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')


    const sumbitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if(value.trim().length === 0) {
            setError('Пожалуйста, введите заголовок')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products/', productData)
        onCreate(response.data)
    }
    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return(
        <form onSubmit={sumbitHandler}>
            <input 
                 type="text" 
                 className="border py-2 px-4 mb-2 w-full outline-0"
                 placeholder="Введите название..."
                 value={value}
                 onChange={changeHandler}
            />

            {error && <ErrorMessage error={error}/>}

            <button type="submit" className="py-2 px-4 border bg-yellow-400">Создать продукт</button>
        </form>
    )
}