import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './style.css'
import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from "react-redux"
import { store,persistor } from '../redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SocketProvider } from './context/socket'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <SocketProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
        </SocketProvider>
      </Provider>
    </PersistGate>
  </StrictMode>
)
