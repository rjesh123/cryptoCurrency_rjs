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

    const updatedData = {
      currencyLogo: data.currency_logo,
      currencyName: data.currency_name,
      euroValue: data.euro_value,
      usdValue: data.usd_value,
      id: data.id,
    }

    this.setState({cryptoCurrencyData: updatedData, isLoading: false})
  }

  renderCryptoCurrencyApp = () => {
    const {cryptoCurrencyData} = this.state

    return <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderCryptoCurrencyApp()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
