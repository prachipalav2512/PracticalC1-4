import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';



const data = [
  {
    info: {
      id: '51447',
      name: "McDonald's",
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_51447.JPG',
      locality: 'Virar Global City',
      areaName: 'Virar West',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
      avgRating: 4.4,
      parentId: '630',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 36,
        lastMileTravel: 6.6,
        serviceability: 'SERVICEABLE',
        slaString: '35-40 mins',
        lastMileTravelString: '6.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-05-29 23:59:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Burger.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Burger.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/mcdonalds-virar-global-city-virar-west-mumbai-51447',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '54126',
      name: 'Jumboking Indian Burger',
      cloudinaryImageId: '1d28938079eb7f702430de634e2da330',
      locality: 'Virar',
      areaName: 'Virar West',
      costForTwo: '₹200 for two',
      cuisines: ['American', 'Mexican', 'Fast Food', 'Snacks', 'Beverages'],
      avgRating: 4.2,
      veg: true,
      parentId: '515',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.6,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '5.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-05-29 22:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/jumboking-indian-burger-virar-virar-west-mumbai-54126',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '237800',
      name: 'Monginis Cake Shop',
      cloudinaryImageId: 'tjwqbm9hgnwcjy8ixgsq',
      locality: 'Bazar Ward',
      areaName: 'Virar East',
      costForTwo: '₹300 for two',
      cuisines: ['Bakery', 'Desserts', 'Snacks'],
      avgRating: 4.6,
      parentId: '5007',
      avgRatingString: '4.6',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 42,
        lastMileTravel: 4.1,
        serviceability: 'SERVICEABLE',
        slaString: '40-45 mins',
        lastMileTravelString: '4.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-05-29 23:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'v1705582451/Ratnesh_Badges/Perfect_cake.png',
            shortDescription: 'Perfect cake delivery',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'v1705582451/Ratnesh_Badges/Perfect_cake.png',
                  shortDescription: 'Perfect cake delivery',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/monginis-cake-shop-bazar-ward-virar-east-mumbai-237800',
      type: 'WEBLINK',
    },
  },
]; 
console.log(data[0])



const Heading = () => {

  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          alt='logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjntbE8QVogGghkQsyc75K4ZGmNhyGP6y8g&s'
        ></img>
      </div>
      <div className='nav-container'>
        <ul>
          <li>Home </li>
          <li>About </li>
          <li>Contact us </li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  const{name,cuisines,avgRating,cloudinaryImageId}=props.restro.info
  return (
    <div className='card'>
      <img className='restroLogo' alt='imageCard' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>

      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <h2>{cuisines.join(',')}</h2>
      {/* <h2>45 minutes</h2> */}
    </div>
  );
};
const Body = () => {
  return (
    <div className='appBody'>
      <div className='search'>Search</div>
      <div className='card-container'>
     { data.map((restro)=>{
        return <RestroCard restro={restro} />
      })
        }
      </div>
    </div>
  );
};
const AppBody = () => {
  return (
    <div>
      <Heading />
      <Body />
    </div>
  );
};

// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"}, React.createElement("h1",{id:"heading"},"I am h1")))
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppBody />);




// const[data,setDate]=useState([]);

// const Header = () => {
//   return (
//     <div className='header'>
//       <img />
//       <div>
//         <ul className='navbar'>
//           <li>Help </li>
//           <li>Sign In </li>
//           <li>Cart </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// const Card = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         height: 100,
//         width: 400,
//         boxShadow: '0 0 3px 2px #cec7c759',
//         alignItems: 'center',
//         padding: 20,
//         borderRadius: 20,
//       }}
//     >
//       <h1>Hot and spice</h1>
//       <img alt='RestImg' src='' />
//       <h1> Rating</h1>
//       <h1>5</h1>
//     </div>
//   );
// };
// const AppBody = () => {
  
//   return (
//     <div>
//       <h1>Search</h1>
//       <div
//         className='card-container'

//       >
//         <Card />
//       </div>
//     </div>
//   );
// };

// const data = {
//   info: {
//     id: '24434',
//     name: "Domino's Pizza",
//     cloudinaryImageId: 'd0450ce1a6ba19ea60cd724471ed54a8',
//     locality: 'Rahatani Road',
//     areaName: 'Pimple Saudagar',
//     costForTwo: '₹400 for two',
//     cuisines: ['Pizzas', 'Italian', 'Pastas', 'Desserts'],
//     avgRating: 4.3,
//     parentId: '2456',
//     avgRatingString: '4.3',
//     totalRatingsString: '10K+',
//     sla: {
//       deliveryTime: 30,
//       lastMileTravel: 2.2,
//       serviceability: 'SERVICEABLE',
//       slaString: '30 mins',
//       lastMileTravelString: '2.2 km',
//       iconType: 'ICON_TYPE_EMPTY',
//     },
//     availability: {
//       nextCloseTime: '2024-04-24 02:55:00',
//       opened: true,
//     },
//     badges: {
//       imageBadges: [
//         {
//           imageId: 'Rxawards/_CATEGORY-Pizza.png',
//           description: 'Delivery!',
//         },
//       ],
//     },
//     isOpen: true,
//     type: 'F',
//     badgesV2: {
//       entityBadges: {
//         imageBased: {
//           badgeObject: [
//             {
//               attributes: {
//                 description: 'Delivery!',
//                 imageId: 'Rxawards/_CATEGORY-Pizza.png',
//               },
//             },
//           ],
//         },
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: '20% OFF',
//       subHeader: 'UPTO ₹50',
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
//       differentiatedUiMediaDetails: {
//         mediaType: 'ADS_MEDIA_ENUM_IMAGE',
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
//     restaurantOfferPresentationInfo: {},
//   },
//   analytics: {
//     context: 'seo-data-f0ecb045-95f6-46d0-8eb0-742063d7ca59',
//   },
//   cta: {
//     link: 'https://www.swiggy.com/restaurants/dominos-pizza-rahatani-road-pimple-saudagar-pune-24434',
//     text: 'RESTAURANT_MENU',
//     type: 'WEBLINK',
//   },
//   widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
// };



// const Display=(props)=>{
//  return (
//    <div>
//      <h1>{props.restaurant.name}</h1>
//    </div>
//  );
// }

// const MyApp = () => {
// const [dataFromAPI, setData] = useState([]);
// useEffect(() => {
//   fetchData();
// }, []);

// const fetchData = async () => {
//   const data = await fetch(
//     'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3748258&lng=72.8264378&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
//   );
//   const jsonData = await data.json();
//   console.log(jsonData);
//   //What's on your mind
//   // console.log(jsonData.data.cards[0].card.card.imageGridCards.info);
//   //Top restaurants in Mumbai
//   // console.log(
//   //   jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
//   // );
//   //Restaurants with Online Food delivery
//   // console.log(
//   //   jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
//   // );
//   setData(
//     jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
//   );
// };
//   return (
//     <div className='appContainer'>
//       {dataFromAPI}
//       {setData.map((restaurant)=>{
//         return(
//  <h1 > {restaurant.name} </h1>
//         )
//       })}
//       <AppBody />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyApp />);
