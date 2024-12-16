// React
// import React from "react";
// import Footer from "@/components/footer";

// import { Header } from "@/components/header";
// import Hero from "@/components/hero";



// export default function Home (){
// return(
//     <div>
//         <div><Header/></div>   
//         <div><Hero/></div>
//         <div><Footer/></div>  
//     </div>
//     )
// }

import React from "react";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
