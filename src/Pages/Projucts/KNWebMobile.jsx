import React, { useEffect } from 'react';
import { GasContent } from '../../Constant';


const KNWebMobile = () => {
  useEffect(() => {
    const cardsContainer = document.querySelector('.cards');
    const cards = document.querySelectorAll('.card');

    cardsContainer.style.setProperty('--cards-count', cards.length);
    cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);

    Array.from(cards).forEach((card, index) => {
      const offsetTop = 20 + index * 2;
      card.style.paddingTop = `${offsetTop}px`;
      if (index === cards.length - 1) {
        return;
      }
      const toScale = 1 - (cards.length - 1 - index) * 0.02;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector('.card__inner');

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          cardInner.style.transform = `scale(${toScale})`;
          cardInner.style.filter = `brightness(0.6)`;
        } else {
          cardInner.style.transform = `scale(1)`;
          cardInner.style.filter = `brightness(1)`;
        }
      }, {
        root: null,
        threshold: 0.3
      });

      observer.observe(nextCard);
    });
  }, []);

  return (
    <div>
      <div className="h-40"></div>
      <div className="cards mx-auto max-w-xs">
        {GasContent.map((data, index) => (
          <div className="card sticky top-0" key={index} data-index={index}>
            <div className="card__inner bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
              <div className="card__image-container w-full">
                {data.content}
              </div>
              <div className="card__content p-4 flex flex-col">
                <h1 className="card__title font-semibold text-gray-800">
                  {data.title}
                </h1>
                <p className="card__description mt-2 text-sm text-gray-600">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="space h-40"></div>
    </div>
  );
};

export default KNWebMobile;
