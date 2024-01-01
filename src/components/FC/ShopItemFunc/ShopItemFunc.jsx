import React from 'react'
import PropTypes from 'prop-types'

import GoodsItem from '../../_common/Goods';

import classes from './css/main.css';


const ShopItemFunc = ({item}) => {
    return (
        // jsx-разметка для DOM-элемента:
        <div className={classes["Content"]}>
            <div className="main-content">
              <h2>{item.brand}</h2>
              <h1>{item.title}</h1>
              <h3>{item.description}</h3>
              <div className="description">{item.descriptionFull}</div>
              <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
              </div>
              <div className="divider"></div>
              <div className="purchase-info">
                <div className="price">{`${item.currency}${item.price.toFixed(2)}`}</div>
                {/* <div className="price">{item.currency}{item.price.toFixed(2)}</div> */}
                <button>Добавить в корзину</button>
              </div>
            </div>
        </div>
    )
}

ShopItemFunc.propTypes = {
    // валидация: экземпляр класса?
    item: PropTypes.instanceOf(GoodsItem).isRequired,
}

export default ShopItemFunc
