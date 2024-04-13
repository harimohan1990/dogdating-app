import React, { useState } from 'react';

export default function PaymentOption() {
  const [upiCondition, setUpiCondition] = useState(false);
  const [creditCardCondition, setCreditCardCondition] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [netbankingCondition, setNetbankingCondition] = useState(false);
  const [selectedNetBanking, setSelectedNetBanking] = useState('');
  const [walletCondition, setWalletCondition] = useState(false); // Added for wallet options

  const upiOpener = () => {
    return (
      <div>
        <span>Choose an option:</span>
        <label>
          PhonePay
          <input type="radio" name="upi-options" />
        </label>
        <label>
          Gpay
          <input type="radio" name="upi-options" />
        </label>
        <label>
          UPI ID
          <input type="text" required name="upi-id" maxLength="45" tabIndex="1" value="" />
        </label>
      </div>
    );
  };

  const creditCardOpener = () => {
    return (
      <input
        type="text"
        className="_1w3ZZo _2mFmU7"
        autoComplete="off"
        name="creditCardNumber"
        maxLength="16"
        required
        tabIndex="2"
        value={creditCardNumber}
        onChange={(e) => setCreditCardNumber(e.target.value)}
      />
    );
  };

  const netbankingOpener = () => {
    return (
      <div>
        <label htmlFor="HDFC">
          <input
            type="radio"
            name="netBanking"
            readOnly
            id="HDFC"
            checked={selectedNetBanking === 'HDFC'}
            onChange={() => handleNetbankingChange('HDFC')}
          />
          <div></div>
          <div>
            <span>HDFC Bank</span>
          </div>
        </label>
        <label htmlFor="ICICI">
          <input
            type="radio"
            name="netBanking"
            readOnly
            id="ICICI"
            checked={selectedNetBanking === 'ICICI'}
            onChange={() => handleNetbankingChange('ICICI')}
          />
          <div></div>
          <div>
            <span>ICICI Bank</span>
          </div>
        </label>
        {/* Add more labels for other banks */}
      </div>
    );
  };

  // New wallet opener function
  const walletOpener = () => {
    return (
      <div>
        <span>Choose a wallet:</span>
        <label>
          Paytm
          <input type="radio" name="wallet-options" />
        </label>
        <label>
          PayPal
          <input type="radio" name="wallet-options" />
        </label>
        {/* Add more labels for other wallets */}
      </div>
    );
  };

  const handleUpiChange = (e) => {
    const { checked } = e.target;
    setUpiCondition(checked);
  };

  const creditCardHandler = () => {
    setCreditCardCondition(true);
    setUpiCondition(false);
    setNetbankingCondition(false);
    setWalletCondition(false); // Close the wallet options if they were open
  };

  const handleNetbankingChange = (bankName) => {
    setSelectedNetBanking(bankName);
    setNetbankingCondition(true);
    setUpiCondition(false);
    setCreditCardCondition(false);
    setWalletCondition(false); // Close the wallet options if they were open
  };

  const handleWalletChange = (e) => {
    const { checked } = e.target;
    setWalletCondition(checked);
  };

  const walletHandler = () => {
    setWalletCondition(true);
    setUpiCondition(false);
    setCreditCardCondition(false);
    setNetbankingCondition(false);
  };

  const handlePaymentMethodChange = () => {
    setUpiCondition(false);
    setCreditCardCondition(false);
    setNetbankingCondition(false);
    setWalletCondition(false);
  };

  return (
    <div>
      <div>
        <span>1</span>
        <span>Login</span>
      </div>
      <div>
        <span>2</span>
        <span>Delivery Address</span>
      </div>

      <div>
        <span>3</span>
        <span>Payment Options</span>
      </div>

      <div>
        <div onClick={handleUpiChange}>
          <input type="radio" name="paymentMethod" value="UPI" />
          <span>UPI</span>
        </div>
        {upiCondition && upiOpener()}
        <div onClick={creditCardHandler}>
          <input type="radio" name="paymentMethod" value="creditCard" onChange={handlePaymentMethodChange} />
          <span>Credit Card</span>
        </div>
        {creditCardCondition && creditCardOpener()}
        <div onClick={handleNetbankingChange}>
          <input type="radio" name="paymentMethod" value="netbanking" />
          <span>Net Banking</span>
        </div>
        {netbankingCondition && netbankingOpener()}
        <div onClick={handleWalletChange}>
          <input type="radio" name="paymentMethod" value="wallet" />
          <span>Wallet</span>
        </div>
        {walletCondition && walletOpener()}
      </div>
    </div>
  );
}
