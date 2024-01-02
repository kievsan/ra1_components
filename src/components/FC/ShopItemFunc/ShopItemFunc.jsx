import React from 'react'
import PropTypes from 'prop-types'

import GoodsItem from '../../_objects/Goods';

import styles from './css/content.module.css';


const ShopItemFunc = ({item}) => {
    return (
        // jsx-разметка для DOM-элемента:
        // <div className={styles["container"]}>
            <div className={styles["main-content"]}>
              <h2>{item.brand}</h2>
              <h1>{item.title}</h1>
              <h3>{item.description}</h3>
              <div className={styles["description"]}>{item.descriptionFull}</div>
              <div className={`${styles["highlight-window"]} ${styles["mobile"]}`}>
                <div className={styles["highlight-overlay"]}></div>
              </div>
              <div className={styles["divider"]}></div>
              <div className={styles["purchase-info"]}>
                <div className={styles["price"]}>{`${item.currency}${item.price.toFixed(2)}`}</div>
                {/* <div className="price">{item.currency}{item.price.toFixed(2)}</div> */}
                <button>Добавить в корзину</button>
              </div>
            </div>
        // </div>
    )
}

ShopItemFunc.propTypes = {
    // валидация: экземпляр класса?
    item: PropTypes.instanceOf(GoodsItem).isRequired,
}

export default ShopItemFunc
