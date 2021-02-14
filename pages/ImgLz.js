import React, { useEffect, useState } from 'react';
import { useInView } from 'react-hook-inview';

const LazyLoadImg = ({
                         src,
                         alt,
                         ErrorPlaceHolderComponent,
                         placeHolderComponent,
                         wrapperClassName,
                         LoadedClassName,
                     }) => {
    const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const [ref, isVisible] = useInView({
      threshold: 0.5,
    });

    useEffect(() => {
      let newImg = new Image();

      if (isVisible && !hasLoadedOnce) {
        newImg.onload = function () {
          setHasLoadedOnce(true);
          setIsImgLoaded(true);
        };
        newImg.onerror = function () {
          setHasLoadedOnce(true);
          setIsImgLoaded(true);
          setHasError(true);
        };
        newImg.src = src;
      }
    }, [isVisible]);

    return (
        <div
          ref={ref}
          className={`${
            ((isVisible && isImgLoaded) || hasLoadedOnce) && LoadedClassName
          } ${wrapperClassName}`}
        >
          {hasError ? (
            <>{ErrorPlaceHolderComponent}</>
          ) : (isVisible && isImgLoaded) || hasLoadedOnce ? (
            <img src={src} alt={alt} width={'100%'} />
          ) : (
            <>{placeHolderComponent}</>
          )}
        </div>
    );
};


export default LazyLoadImg;
