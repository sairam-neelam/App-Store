import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeBtn = isActive ? 'active-btn' : ''

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-element">
      <button type="button" className={`btn ${activeBtn}`} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
