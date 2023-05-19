import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrencyData} = props

  return (
    <div className="crypto-currency-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="currency-img"
      />
      <div className="currency-list-container">
        <div className="currency-header-container">
          <p className="name">Coin Type</p>
          <div className="currency-units-container">
            <p className="name">USD</p>
            <p className="name">EURO</p>
          </div>
        </div>
        <ul className="currencies-list">
          {cryptoCurrencyData.map(eachCurrency => (
            <CryptocurrencyItem key={eachCurrency.id} currency={eachCurrency} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
