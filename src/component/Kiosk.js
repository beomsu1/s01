import { useState } from "react"

const product = [
    {pno : 1, pname : 'Americano' , price : 5000 },
    {pno : 2, pname : 'Smoothie' , price : 6000 },
    {pno : 3, pname : 'Ade' , price : 7000 },
    {pno : 4, pname : 'Latte' , price : 9000 },
]

// 총액
const getTotal = (arr) => {

    if(!arr || arr.length===0){
        return 0
    } 
    let sum = 0

    for(const ele of arr){
        sum += (ele.price * ele.qty)
    }
    return sum
}

const Kiosk = () => {

    // items라는 변수 , setItems 라는 함수를 요소로 가지는 배열 생성
    const [items,setItems] = useState([])

    const handerClickBuy = (product) => {
        console.log({...product, qty:1})
   

    const result = items.filter( ele => ele.pno === product.pno)

    console.log("result" , result)

    if(result.length === 0){

        // 새로운 배열을 생성하여 items 상태를 업데이트 하고 product 객체와 qty 속성 추가
        setItems([...items,{...product, qty:1}])
        return
    }
    
    // result의 첫번쨰 요소를 cartItem에 할당
    const cartItem = result[0]
    // qty의 값을 1증가
    cartItem.qty += 1
    setItems([...items])

}

    const handleClickQty = (pno , amount) => {
        console.log("pno" , pno , "amount" , amount)
        
        // times 배열에서 pno 속성 값이 pno 변수와 일치하는 첫번째 요소 참조
        const target = items.filter(item => item.pno === pno)[0]

        console.log(target)

        // increse
        if(amount === 1){
            target.qty += 1
            setItems([...items])
        } else{
            // 삭제처리
            if(target.qty === 1){
                setItems(items.filter(ele => ele.pno !== pno))
            } else{
                target.qty -= 1
                setItems([...items])
            }
        }


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
                <ul>
                   {items.map((item,idx)=>
                   <li key={idx} className="border-2">
                    <div className=" text-2xl m-4 p-4">
                        <div>{item.pname}</div>
                        <div>{item.price}</div>
                    </div>
                    <div className="flex justify-center text-2xl">
                    <button 
                    onClick={() => handleClickQty(item.pno,1)}
                    className="m-1 rounded-lg bg-emerald-300 p-4">+</button>
                    <p className="m-2 p-2">{item.qty}</p>
                    <button 
                    onClick={() => handleClickQty(item.pno,-1)}
                    className="m-1 rounded-lg bg-emerald-300 p-4">-</button>
                    </div>
                   </li>)}
                </ul>
                <div className="bg-blue-400 text-white text-3xl">
                    Total {getTotal(items)}
                </div>
            </div>
        </div>
     );
}
 
export default Kiosk;