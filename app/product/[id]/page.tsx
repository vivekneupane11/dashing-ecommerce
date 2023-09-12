import Category from "@/components/Category";
import Footer from "@/components/Footer";

export default function Product({params}:{params:{id:string}}) {
  return (
    <main>

<Category/>

<h1>Param: {params.id}</h1>

<Footer/>
</main>
  )
}
