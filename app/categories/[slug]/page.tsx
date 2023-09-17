
export default async function Category({params}:{params:{slug:string}}) {
  const products = await (await fetch(`https://fakestoreapi.com/products/category/${params.slug}`)).json();
    console.log("🚀 ~ file: page.tsx:5 ~ Category ~ products:", products)
  return (
  
    <div> {params.slug}</div>
  )
}
