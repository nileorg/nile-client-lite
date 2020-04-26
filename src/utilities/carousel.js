export const bindOptions = (pointer) => {
  const self = pointer;
  const calculateCardsPerView = (windowWidth, itemWidth) => Math.floor(windowWidth / itemWidth) + 0.5;
  window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth - self.carouselPadding;
    const itemWidth = self.carouselWidth + self.carouselGap;
    self.carouselPerView = calculateCardsPerView(
      windowWidth,
      itemWidth,
    );
    self.carouselKey = Math.floor(Math.random() * 10000);
  });
  const windowWidth = window.innerWidth - self.carouselPadding;
  const itemWidth = self.carouselWidth + self.carouselGap;
  self.carouselPerView = calculateCardsPerView(windowWidth, itemWidth);
  self.carouselKey = Math.floor(Math.random() * 10000);
};

export const getDefaults = () => ({
  carouselGap: 20,
  carouselWidth: 250,
  carouselPadding: 30,
  carouselKey: 0,
  carouselPerView: 3,
});


export default {};
