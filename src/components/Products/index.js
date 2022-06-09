import img2 from '../images/img2.jpg';

const ProductosLista = () => {
    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                <div className='producto'>
                    <a href="#">
                        <div className="producto__img">
                            <img src={img2} alt="" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className='btn'>Vista</a>
                        </div>
                    </div>
                </div>
                <div className='producto'>
                    <a href="#">
                        <div className="producto__img">
                            <img src={img2} alt="" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className='btn'>Vista</a>
                        </div>
                    </div>
                </div>
                <div className='producto'>
                    <a href="#">
                        <div className="producto__img">
                            <img src={img2} alt="" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className='btn'>Vista</a>
                        </div>
                    </div>
                </div>
                <div className='producto'>
                    <a href="#">
                        <div className="producto__img">
                            <img src={img2} alt="" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className='btn'>Vista</a>
                        </div>
                    </div>
                </div>
                <div className='producto'>
                    <a href="#">
                        <div className="producto__img">
                            <img src={img2} alt="" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className='btn'>Vista</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductosLista;