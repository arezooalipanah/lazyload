import React from 'react';
import LazyLoadImg from "./ImgLz";

export default function Home() {
  return (
      <div>
          <LazyLoadImg
            src='https://uat-api.bourseon.com/media/2c1817a0-f33b-4eed-954a-4c132414e2ff_SatFeb132021.jpg'
          />
      </div>
  )
}
