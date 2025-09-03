import {createRoot} from 'react-dom/client'
import {StudioProvider, Studio} from 'sanity'
import config from './sanity.config'

const root = createRoot(document.getElementById('root'))

root.render(
  <StudioProvider config={config}>
    <Studio />
  </StudioProvider>
)
