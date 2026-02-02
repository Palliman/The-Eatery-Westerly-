"use client"

export default function RestaurantGuruBadge() {
  const badgeHTML = `<div id="circle-r-ribbon" onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.r-ribbon_title').href);return 0;}" class=""> <div class="r-ribbon_ahead "> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160px" height="160px" viewBox="0 0 160 160"> <defs> <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0"></path> </defs> <text class="r-ribbon_ahead-heading " fill="#000" textAnchor="middle"> <textPath startOffset="50%" xlinkHref="#heading-arc">Recommended</textPath> </text> </svg> </div> <p class="r-ribbon_year">2025</p> <a href="https://restaurantguru.com/The-Eatery-Westerly" class="r-ribbon_title " target="_blank">The Eatery</a> <div class="r-ribbon_ahead r-ribbon_ahead-bottom"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120px" height="120px" viewBox="0 0 120 120"> <defs> <path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0"></path> </defs> <text class="r-ribbon_ahead-subh" fill="#000" textAnchor="middle"> <textPath startOffset="50%" xlinkHref="#subheading-arc"><a href="https://restaurantguru.com" target="_blank">Restaurant Guru</a></textPath> </text> </svg> </div></div>`

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: badgeHTML }}
      className="restaurant-guru-badge"
    />
  )
}
