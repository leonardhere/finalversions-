import axios from 'axios';
import  { AxiosError, } from 'axios';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../models';

export function useProducts() {
    
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts() {
    try{
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?Limit=5')
      setProducts(response.data)
      setLoading(false)
    } catch(e: unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }


  useEffect(() => {
    fetchProducts()
  }, [])

  return {products, error, loading, addProduct}
}