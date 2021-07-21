import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-element">
      <img src={imageUrl} className="app-image" alt="app" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
