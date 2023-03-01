import './index.css'

const PasswordItem = props => {
  const {eachPasswordItem, isActive} = props

  const {userName, websiteName, password} = eachPasswordItem

  const websiteNameFirstLetter = websiteName[0]

  const onClickDeleteButton = () => {
    deletePassword()
  }

  const passwordView = () => {
    const initialPassword = password

    const wrappedPassword = password.replace(/./g, '*')
    // console.log(wrappedPassword)

    return isActive ? initialPassword : wrappedPassword
  }
  return (
    <li className="password-list">
      <div className="item-container">
        <div className="item-inner-container">
          <div className="name-round-container">
            <h1>{websiteNameFirstLetter}</h1>
          </div>
          <div className="credentials-container">
            <h1 className="text">{websiteName}</h1>
            <h1 className="text">{userName}</h1>
            <h1 className="text">{passwordView()}</h1>
          </div>
          <button
            type="button"
            className="delete-button"
            onClick={onClickDeleteButton()}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PasswordItem
