import { mockData } from "@/data/products"
import CartProducts from "@/components/products/CartProducts"
import Boton from "@/components/ui/Boton"
import BtnVolver from "@/components/ui/BtnVolver"

const Cart = () => {


    const items = mockData.filter(product => product.type === 'tvs')


    return (
        <div className="container m-auto mt-8 mb-2 bg-win-gray-light w-2/5 min-w-min border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
            <div className="text-white bg-win-blue">
                <p className="ml-2 p-1">Carrito</p>
            </div>
            <div className="md:flex px-4">
                <section className="flex flex-wrap justify-center items-center gap-2 ">

                    {items.map(product => <CartProducts key={product.slug} item={product} />)}

                </section>
                <div className="container m-auto w-full min-w-max h-max flex flex-col  md:mx-4 mb-2 p-4 gap-6 border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
                    <p>Cantidad de items: 2</p>
                    <p>Sub total: U$S 123</p>
                    <p>Iva (22%): U$S 27</p>
                    <h1 className="text-2xl font-semibold">Precio total: U$S 150 </h1>

                    <section className="flex items-end gap-2 mb-2 mt-6">
                        <Boton >Finalizar compra</Boton>
                        <BtnVolver />
                    </section>
                </div>

            </div>

        </div>
    )
}

export default Cart