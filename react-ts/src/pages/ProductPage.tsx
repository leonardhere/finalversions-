import React from 'react'
import { useContext, useState } from 'react';
import { CreateProuct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';

export function ProductPage() {
    const {loading, error, products, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)
  
    const createHandler = (product: IProduct) => {
      close()
      addProduct(product)
    }
  
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader/>}
        {error && <ErrorMessage error= { error }/>}
        {products.map(product => <Product product={product} key={product.id}/>)}
        {/* <Product product={products[0]}/>
        <Product product={products[1]}/> */}
        {modal && <Modal title='Create new product' onClose={close}>
          <CreateProuct onCreate={createHandler}/>
        </Modal>}
        <button className='absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}>+</button>
      </div>
    );
}

