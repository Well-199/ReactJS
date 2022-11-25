import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

const Chat = () => {

    // PRODUÇÃO http://52.67.82.164:3000/
    // TESTES http://54.159.228.240:4000/
    // LOCAL http://192.168.3.3:4000/

    const socket = io('http://54.159.228.240:4000/', { query: { match: 67 }})

    const [clienteId, setClienteId] = useState(56488)
    const [restauranteId, setRestauranteID] = useState(67)
    const [chavePedido, setChavePedido] = useState('56.46240188903388')
    const [message, setMessage] = useState('')
    const [chat, setChat] = useState([])
    

    useEffect(() => {

        socket.on('attOrders', (data) => {
            //setMessage(data.message)
            console.log('SHOW MESSAGE', data)
        })

    }, [message])

    async function sendChatMessage() {

        const req = await fetch('http://192.168.3.3:3001/api/salvar-mensagem', {
            method: 'POST',
            body: JSON.stringify({
                cliente_id: clienteId,
                restaurante_id: restauranteId,
                chave_pedido: chavePedido,
                mensagemCliente: message
            }),
            headers: {
                'Content-Type': 'application/json',
                'authorization': '165765787964209588022835036543'
            }
        })
        const res = await req.json()
    
        getMessages()
    
      }

      function handleMessage(){

        if(message !== ''){
            socket.emit('sendAtt', {message: true})
            setMessage('')
        }

    }
    
    
      async function getMessages () {
    
        const req = await fetch('http://192.168.3.3:3001/api/retorna-mensagens', {
            method: 'POST',
            body: JSON.stringify({
                cliente_id: clienteId,
                restaurante_id: restauranteId,
                chave_pedido: chavePedido
            }),
            headers: {
                'Content-Type': 'application/json',
                'authorization': '165765787964209588022835036543'
            }
        })
        const res = await req.json()
        setChat(res.result)
    
    }

    console.log(chat)

    useEffect(() => {
        getMessages()
    }, [])

    return(
        <div style={{
            'width': '100%',
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            'alignItems': 'center'
        }}>
            

            {chat.map(item => 
                <ul style={{ 'listStyle': 'none' }}>

                    {item.comentario &&
                        <li style={{ 'color' : '#34495e', 'marginBottom': '20px' }}>
                            Cliente: {item.comentario}
                        </li>
                    }

                    {item.observacao && 
                    <li style={{ 'color' : '#e74c3c' }}>
                        Restaurante: {item.observacao}
                    </li>
                    }
                </ul>
            )}
                   
            

            <h1 style={{'color': '#FFFFFF'}}>{ message }</h1>
            <input 
                style={{ 
                    'width': '450px',
                    'height': '40px',
                    'fontSize': '20px',
                    'marginTop': '20px',
                    'marginBottom': '30px',
                }}
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button 
                style={{
                    'width': '200px',
                    'height': '40px',
                    'borderRadius': '8px',
                    'outline': 0,
                    'borderColor': '#CCC',
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