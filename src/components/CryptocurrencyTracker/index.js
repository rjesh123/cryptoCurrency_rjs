import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/crypto-currency-converter`,
    )
    const data = await response.json()
    console.log(data)

    const updatedData = data.map(eachData => ({
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
      id: eachData.id,
    }))

    this.setState({cryptoCurrencyData: updatedData, isLoading: false})
  }

  renderCryptoCurrencyApp = () => {
    const {cryptoCurrencyData} = this.state
    console.log(cryptoCurrencyData)

    return <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoCurrencyApp()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
