const product = [
    {pno : 1, pname : 'Americano' , price : 5000 },
    {pno : 2, pname : 'Smoothie' , price : 6000 },
    {pno : 3, pname : 'Ade' , price : 7000 },
    {pno : 4, pname : 'Latte' , price : 9000 },
]

const Kiosk = () => {

    const handerClickBuy = (product) => {
        console.log(product)
    }


    return ( 
        <div className="w-full h-[100vh] bg-white flex">
            <div className="w-2/3 bg-pink-300">
                <div className="text-4xl font-extrabold">Product
                    <ul>
                        {product.map( p => 
                        <li key={p.pno} className="text-2xl underline m-3 p-3 bg-blue-300">{p.pno} - {p.pname} - {p.price} 
                        <button onClick={() => handerClickBuy(p)} className="border-2 m-2 p-2 rounded-sm border-pink-500">BUY</button>    
                        </li>)}

                    </ul>

                </div>
            </div>
            <div className="w-1/3 bg-cyan-200">
                <div className="text-4xl font-extrabold">Cart</div>
                 
            </div>
        </div>
     );
}
 
export default Kiosk;