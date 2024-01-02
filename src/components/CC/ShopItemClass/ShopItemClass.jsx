import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoodsItem from '../../_objects/Goods';

import styles from './css/content.module.css';


export default class ShopItemClass extends Component {

  static propTypes = {
    // валидация: экземпляр класса?
    item: PropTypes.instanceOf(GoodsItem).isRequired,
  }

  render() {
    const { item } = this.props;
    // const { brand, title, description, descriptionFull, currency, price } = this.props.item;

    return (
      // jsx-разметка для DOM-элемента:
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
          <div className={styles["price"]}>{item.currency}{item.price.toFixed(2)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
}
