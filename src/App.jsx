
import { CustomerReviews, Footer, Hero, PopularProducts,SuperQuality, Services,Subscribe, SpecialOffer } from "./sections";
import Nav from './components/Nav';
const App =() => (
  <main  className="realtive<">
<Nav />
<section className="x1:padding-1 wide:padding-r padding-b">
  <Hero />
</section>
<section className="padding">
<PopularProducts />
</section>
<section className="padding">
<SuperQuality/>
</section>
<section className="padding-x paddingy-10">
<Services/>
</section>
<section className="padding">
<SpecialOffer/>
</section>
<section className="bg-pale-blue padding">
<CustomerReviews/>
</section><section className="padding-x sm:-32 py-16 w-full">
<Subscribe/>
</section><section className="bg-black padding-x padding-t pb-8">
<Footer/>
</section>
  </main>
);
export default App;