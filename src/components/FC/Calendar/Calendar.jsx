import PropTypes from 'prop-types'

import moment from 'moment'
import 'moment/locale/ru';
import { nanoid } from 'nanoid'

import styles from './css/calendar.module.css'


const Calendar = ({date}) => {

  //форматируем
  const dateName = moment(date).format('dddd');
  const dateNumber = moment(date).format('D');
  const dateMonthDeclension = moment(date).format('D MMMM').split(' ')[1];
  const dateMonth = moment(date).format('MMMM');
  const dateYear = moment(date).format('YYYY');

  //первая показываемая дата
  const startVisibleDay = moment(date).startOf('month').startOf('week');

  //показываемые даты в формате {date: 10, isAnotherMonth: false, isCurrent: false}
  let visibleDates = [];
  for (let i = 0; i < 7 * 5; i++) {
    const current = startVisibleDay.clone().add(i, 'day');
    visibleDates.push({
      date: current.date(),
      isAnotherMonth: current.format('MMMM') !== dateMonth,
      isCurrent: current.format('D MMMM') === moment(date).format('D MMMM')
    })
  }

  return (
    <div className={styles["ui-datepicker"]}>
      <div className={styles["ui-datepicker-material-header"]}>
        <div className={styles["ui-datepicker-material-day"]}>{dateName}</div>
        <div className={styles["ui-datepicker-material-date"]}>
          <div className={styles["ui-datepicker-material-day-num"]}>{dateNumber}</div>
          <div className={styles["ui-datepicker-material-month"]}>{dateMonthDeclension}</div>
          <div className={styles["ui-datepicker-material-year"]}>{dateYear}</div>
        </div>
      </div>
      <div className={styles["ui-datepicker-header"]}>
        <div className={styles["ui-datepicker-title"]}>
          <span className={styles["ui-datepicker-month"]}>
            {dateMonth}</span>
            &nbsp;<span className={styles["ui-datepicker-year"]}>
              {dateYear}</span>
        </div>
      </div>
      <table className={styles["ui-datepicker-calendar"]}>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className={styles["ui-datepicker-week-end"]} />
          <col className={styles["ui-datepicker-week-end"]} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {
            new Array(5).fill(0).map((week, i) => (
              <tr key={nanoid()}>
                  {
                    visibleDates.slice(i * 7, i * 7 + 7)
                      .map((day, i) => (
                        <td 
                          key={nanoid()} 
                          className={styles[day.isAnotherMonth ? 'ui-datepicker-other-month' : day.isCurrent ? 'ui-datepicker-today': null]}>
                            {day.date}
                        </td>
                      ))
                  }
              </tr>)
            )
          }
        </tbody>
      </table>
    </div>
  )
}

Calendar.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
}

export default Calendar
