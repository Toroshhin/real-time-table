import io from 'socket.io-client'

const socket = io({ transports: ['websocket', 'polling', 'flashsocket'] })

export default socket
