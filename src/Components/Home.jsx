import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className='section'>
      <h2 className='section-title'>Welcome To The Simulation Hacthery</h2>
      <p className='section-description'>
        This is just simulation on how the hatchery factory is operate.
      </p>
      <h4 className='section-article'>
        This is the instruction how we operate:
      </h4>
      <ol className='section-list'>
        <li className='list-item'>
          We received the Hatching Eggs from farm on Holding Room, minimum is
          15,000 eggs.
        </li>
        <li className='list-item'>
          We set the how many Hatching Eggs to be hatched, minimum is 15,000
          eggs.
        </li>
        <li className='list-item'>
          We filter any invertil eggs and separated them from vertile eggs.
        </li>
        <li className='list-item'>
          And last step we simulated how many percent is going to hatched to be
          chicks.
        </li>
      </ol>
    </div>
  );
}
