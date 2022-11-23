import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

const Chat = () => {

    // PRODUÇÃO http://52.67.82.164:3000/
    // TESTES http://54.159.228.240:4000/
    // LOCAL http://192.168.3.3:4000/

    const socket = io('http://54.159.228.240:4000/', { query: { match: 67 }})

    const [messages, setMessages] = useState('')
    
    function handleMessage(){
        socket.emit('sendAtt', {message: messages, rest: true, id: Math.random() * 1000})
        setMessages('')
    }

    useEffect(() => {

        socket.on('attOrders', (data) => {
            setMessages(data.message)
            console.log('SHOW MESSAGE', data)
        })

    }, [messages])

    return(
        <div style={{
            'width': '100%',
            'height': '100vh',
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            'alignItems': 'center',
            'backgroundColor': '#34495e'
        }}>

            <h1 style={{'color': '#FFFFFF'}}>{ messages }</h1>
            <input 
                style={{ 
                    'width': '450px',
                    'height': '40px',
                    'fontSize': '20px',
                    'marginTop': '20px',
                    'marginBottom': '30px',
                }}
                type="text" 
                value={messages}
                onChange={(e) => setMessages(e.target.value)}
            />

            <button 
                style={{
                    'width': '200px',
                    'height': '40px',
                    'borderRadius': '8px',
                    'outline': 0,
                    'border': 'none',
                    'cursor': 'pointer',
                    'color': '#000'
                }}
                onClick={handleMessage}
            >
                ENVIAR
            </button>
        </div>
    )
}

export default Chat