import './index.css'

const CryptocurrencyItem = props => {
  const {currency} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currency
  return (
    <li className="currency-container">
      <div className="container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="container">
        <p className="name">{usdValue}</p>
        <p className="name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
