const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, isSidebarOpen: true }
    case "CLOSE_SIDEBAR":
      return { ...state, isSidebarOpen: false }
    default:
      break
  }
}

export default reducer
