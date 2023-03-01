import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    userName: '',
    websiteName: '',
    password: '',
    passwordItemList: [],
    isShowPasswordActive: false,
  }

  deletePassword = id => {}

  onClickShowPassword = () => {
    this.setState(prevState => ({
      isShowPasswordActive: !prevState.isShowPasswordActive,
    }))
  }

  renderNoPasswordView = () => (
    <div className="no-password-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no password"
        className="no-password-image"
      />
      <h1 className="add-password-heading"> No Passwords</h1>
    </div>
  )

  renderPasswordItem = () => {
    const {passwordItemList, isShowPasswordActive} = this.state

    console.log(isShowPasswordActive)

    return (
      <ul className="password-list-view">
        {passwordItemList.map(eachPasswordItem => (
          <PasswordItem
            eachPasswordItem={eachPasswordItem}
            key={eachPasswordItem.id}
            isActive={isShowPasswordActive}
          />
        ))}
      </ul>
    )
  }

  getSecondContainer = () => {
    const {passwordItemList} = this.state

    const passwordItemListLength = passwordItemList.length

    return (
      <div className="second-inner-container">
        <div className="feature-container">
          <div className="score-password">
            <h1 className="heading"> Your Password </h1>
            <h1 className="para">{passwordItemListLength}</h1>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="icon-search"
            />
            <input
              type="search"
              className="input-field-search"
              placeholder="Enter Search Name"
            />
          </div>
        </div>
        <hr className="hl-line" />
        <div className="show-password-container">
          <div className="show-password">
            <input
              type="checkbox"
              className="checkbox-field"
              onClick={this.onClickShowPassword}
            />
            <p className="para">Show Passwords</p>
          </div>
        </div>
        {passwordItemListLength > 0
          ? this.renderPasswordItem()
          : this.renderNoPasswordView()}
      </div>
    )
  }

  addPasswordDetails = event => {
    event.preventDefault()

    const {userName, websiteName, password} = this.state

    const newData = {
      id: uuidv4(),
      userName,
      websiteName,
      password,
    }

    this.setState(prevState => ({
      passwordItemList: [...prevState.passwordItemList, newData],
    }))

    this.setState({
      userName: '',
      websiteName: '',
      password: '',
    })
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangeWebsiteName = event => {
    this.setState({
      websiteName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {userName, websiteName, password} = this.state

    // console.log(isShowPasswordActive)
    // console.log(userName, websiteName, password)
    // console.log(passwordItemList)
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app-logo"
          className="logo"
        />
        <div className="app-inner-container">
          <div className="app-first-container">
            <div className="app-first-inner-container">
              <div className="input-container">
                <form
                  className="input-inner-container"
                  onSubmit={this.addPasswordDetails}
                >
                  <h1 className="add-password-heading">Add new password</h1>
                  <div className="input-field-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="icon"
                    />
                    <input
                      type="text"
                      placeholder="Enter Website"
                      className="input-field"
                      value={userName}
                      onChange={this.onChangeUserName}
                    />
                  </div>
                  <div className="input-field-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="icon"
                    />
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="input-field"
                      value={websiteName}
                      onChange={this.onChangeWebsiteName}
                    />
                  </div>
                  <div className="input-field-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="icon"
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="input-field"
                      value={password}
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="button-container">
                    <button type="submit" className="add-btn">
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="banner-image"
              />
            </div>
          </div>
        </div>
        <div className="app-second-container">{this.getSecondContainer()}</div>
      </div>
    )
  }
}

export default PasswordManager
