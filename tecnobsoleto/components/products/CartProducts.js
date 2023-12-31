import Image from "next/image"
import Boton from "../ui/Boton"

const Cart = ({ item }) => {
    return (
        <article className="container max-w-max m-auto mt-2 mb-2 bg-win-gray-light border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray p-1 ">
            <div className="min-w-min max-w-max flex  justify-center items-center p-2 border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray text-center">
                <section className="bg-white border-r-white:border-b-white border-t-win-btn-border-gray border-l-win-btn-border-gray ">

                    <Image
                        alt={item.title}
                        src={`/img/products/${item.image}`}
                        width={100}
                        height={100}
                        className="object-fill"
                    />

                </section>
                <section className="w-64 p-4 text-left">
                    
                    <h4 className="text-sm my-4 font-semibold">{item.title}</h4>
                    <p className="text-2xl font-semibold my-3">U$S {item.price}</p>
                    
                </section>
                <Boton className="max-h-min order-last">X</Boton>
            </div>

        </article>
    )
}

export default Cart