import GoodsItem from './components/_objects/Goods';

import ShopItemClass from './components/CC/ShopItemClass/ShopItemClass';
import ShopItemFunc from './components/FC/ShopItemFunc/ShopItemFunc';
import Calendar from './components/FC/Calendar/Calendar';

import styles from './App.module.css';


const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

const instance = new GoodsItem(
  'Tiger of Sweden',
  'Leonard coat',
  'Minimalistic coat in cotton-blend',
  'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  399,
  '£'
);

function App() {
  const now = new Date(2023, 12, 30);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["background-element"]}>
        </div>
        <div className={styles["highlight-window"]}>
          <div className={styles["highlight-overlay"]}></div>
        </div>
        <div className={styles["window"]}>
          <ShopItemClass item={(instance)} />
          {/* <ShopItemFunc item={item} /> */}
        </div>
      </div>

      <div className={styles["calendar"]}>
        <Calendar date={now} />
      </div>
      
    </>
  );  
}

export default App;
